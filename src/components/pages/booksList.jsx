"use strict"

import React from "react"; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from "redux";
import {getBooks} from "../../actions/booksActions"; 
import {Grid, Col, Row, Button} from "react-bootstrap"; 
import BookItem from "./bookItem.jsx";	
import BooksForm from "./booksForm.jsx";

import Cart from "./cart"; 		

class BooksList extends React.Component{

	render(){		
		const bookList = this.props.books.map((booksArr) => {
			return(
				<Col xs={12} sm={6} md={4} key={booksArr._id}>
					<BookItem 
						_id = {booksArr._id}
						title = {booksArr.title}
						description = {booksArr.description}
						price = {booksArr.price}
					/>
				</Col>
			)
		});

		return(
			<Grid>
			<Row>
				<Cart />
			</Row>
				<Row style={{marginTop: "15px"}}>
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


