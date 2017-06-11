"use strict"

import React from "react"; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from "redux";
import {getBooks} from "../../actions/booksActions"; 

class BooksList extends React.Component{

	componentDidMount(){
		this.props.getBooks(); 
	}

	render(){
		const bookList = this.props.books.map((booksArr) =>{
			return(
				<div key={booksArr.id}>
					<h2>{booksArr.title}</h2>
					<h2>{booksArr.description} </h2>
					<h2>{booksArr.price}</h2>
				</div>				
			)
		});

		return(
			<div>
				<h1> Hello React </h1>
				{bookList}
			</div>
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