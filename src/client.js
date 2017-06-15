"use strict"

import {createStore, applyMiddleware} from "redux"; 
import logger from "redux-logger"; 
import reducers from "./reducers/index";
import {addToCart} from "./actions/cartActions";
import {postBooks, deleteBooks, updateBooks} from "./actions/booksActions"; 

import React from "react"; 
import {render} from "react-dom"; 
import {Provider} from "react-redux";

import thunk from "redux-thunk";

//React Router 
import {Router, Route, IndexRoute, browserHistory} from "react-router"; 


// step 1 create the store 
const middleware = applyMiddleware(logger, thunk); 
const store = createStore(reducers, middleware);


import BooksList from "./components/pages/BooksList.jsx"; 
import Menu from "./components/menu.jsx";
import Footer from "./components/footer.jsx";
import Cart from "./components/pages/cart.jsx";	
import BooksForm from "./components/pages/booksForm.jsx";	
import Main from "./main.jsx";


const Routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={BooksList}/>
				<Route path="/admin" component={BooksForm}/> 
				<Route path="/cart" component={Cart}/>
			</Route>
		</Router>
	</Provider>
)

render(
	Routes, document.getElementById("app")
);	


// store.subscribe(() => {
// 	console.log("current state is ", store.getState());
// }); 
	
// step 2 create and dispatch actions 

//store.dispatch(postBooks());

// store.dispatch(postBooks([{
// 		id: 3, 
// 		title: "title 3", 
// 		description: "desc 3", 
// 		price: 777
// 	}]));
// crud operations in redux 

//store.dispatch(deleteBooks({id: 1}));

// store.dispatch(updateBooks({
// 		id: 2, 
// 		title: "learn redux", 
// 		description: "desc"
// 	}));

//store.dispatch(addToCart([{id:1}]));



