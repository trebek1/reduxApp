"use strict"

import {createStore} from "redux"; 


import reducers from "./reducers/index";
// step 1 create the store 

const store = createStore(reducers);

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














