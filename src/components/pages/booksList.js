"use strict"

import React from "react"; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from "redux";
import {getBooks} from "../../actions/booksActions"; 
import {Grid, Col, Row, Button} from "react-bootstrap"; 

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
		const bookList = this.props.books.map((booksArr) =>{
			return(
				<div key={booksArr.id}>
					<h2>{booksArr.title}</h2>
					<h2>{booksArr.description} </h2>
					<h2>{booksArr.price}</h2>
					<Button bsStyle="primary">Buy Now</Button>

				</div>				
			)
		});

		return(
			<Grid>
				<Row style={{marginTop: "15px" }}>
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