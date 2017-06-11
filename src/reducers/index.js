"use strict"; 

import {combineReducers} from "redux"; 

import {booksReducers} from "./booksReducers"; 


export default combineReducers({
	books: booksReducers
}); 