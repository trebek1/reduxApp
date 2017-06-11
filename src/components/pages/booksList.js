"use strict"

import React from "react"; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from "redux";
import {getBooks} from "../../actions/booksActions"; 
import {Grid, Col, Row, Button} from "react-bootstrap"; 

import BookItem from "./bookItem";	
import BooksForm from "./booksForm";

class BooksList extends React.Component{

	componentDidMount(){
		this.props.getBooks([{
			id: 4, 
			title: "this is the book title 4", 
			description: "this is the book description 4",
			price: 542
		},
		{
			id: 5, 
			title: "this is the book title 5 ", 
			description: "this is the book description 5",
			price: 234
		}]); 
	}

	render(){	

		const bookList = this.props.books.map((booksArr) => {
		
			return(
					
				<Col xs={12} sm={6} md={4} key={booksArr.id}>

					<BookItem 
						id = {booksArr.id}
						title = {booksArr.title}
						description = {booksArr.description}
						price = {booksArr.price}
					/>

				</Col>
			)
		});

		return(
			<Grid>
				<Row style={{marginTop: "15px" }}>
					<Col xs={12} sm={6}>
						<BooksForm />
					</Col>
					{bookList}
				</Row>
			</Grid>
		)
	}

}

function mapStateToProps(state){
	return{
		books: state.books.books
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getBooks : getBooks
		}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList); 