"use strict"

import {createStore} from "redux"; 


// step 3 define reducers 

const reducer = function(state = {books: []}, action){
	switch(action.type){
		case "INCREMENT": 
		return state + action.payload; 
		break;
		case "DECREMENT": 
		return state - action.payload; 
		break; 
		case "POST_BOOK":
		// let books = state.books.concat(action.payload); 
		// return {books}; 

		let books = [...state.books, ...action.payload]
		state.books = books; 
		return state; 
		break; 

		case "DELETE_BOOK":
		// create a copy of the current array 
		const currentBookToDelete = [...state.books]; 
		// determine wich index in array is book to be delete 
		const indexToDelete = currentBookToDelete.findIndex((book) => book.id === action.payload.id); 
		let books2 = [...currentBookToDelete.slice(0,indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)];
		state.books = books2; 
		return state; 
		break;

		case "UPDATE_BOOK": 
		const currentBookToUpdate = [...state.books]; 

		const indexToUpdate = currentBookToUpdate.findIndex((book) => book.id === action.payload.id); 

		const newBookToUpdate = {
			...currentBookToUpdate[indexToUpdate], 
			title: action.payload.title,
			description: action.payload.description	
		}
		const updateBooks = [...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)];
		state.books = updateBooks;  
	}
	return state; 	
}

// step 1 create the store 

const store = createStore(reducer);

store.subscribe(() => {
	console.log("current state is ", store.getState());
}); 
	
// step 2 create and dispatch actions 

// store.dispatch({type: "INCREMENT", payload : 1});

// store.dispatch({type: "INCREMENT", payload : 1});

// store.dispatch({type: "INCREMENT", payload : 1});

// store.dispatch({type: "INCREMENT", payload : 1});

// store.dispatch({type: "DECREMENT", payload : 1});

store.dispatch({
	type: "POST_BOOK", 
	payload: [{
		id: 1, 
		title: "this is the book title", 
		description: "this is the book description",
		price: 1337
	},{
		id: 2, 
		title: "this is the book title 2 ", 
		description: "this is the book description 2",
		price: 1447
	}]
});

// crud operations in redux 

store.dispatch({
	type: "POST_BOOK", 
	payload: [{
		id: 3, 
		title: "title 3", 
		description: "desc 3", 
		price: 777
	}]
})

store.dispatch({
	type: "DELETE_BOOK", 
	payload: {id: 1}
});

store.dispatch({
	type: "UPDATE_BOOK", 
	payload: {
		id: 2, 
		title: "learn redux", 
		description: "desc"
	}
})














