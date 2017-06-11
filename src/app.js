"use strict"

import {createStore} from "redux"; 


// step 3 define reducers 

const reducer = function(state = [], action){
	switch(action.type){
		case "INCREMENT": 
		return state + action.payload; 
		break;
		case "DECREMENT": 
		return state - action.payload; 
		break; 
		case "POST_BOOK":
		return state = action.payload; 
		break; 
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

