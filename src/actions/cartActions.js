"use strict"
import axios from "axios"; 

export function addToCart(cart){
	return function(dispatch){
		axios.post("/api/cart", cart)
		.then(function(response){
			dispatch({type: "ADD_TO_CART", payload: response.data})
		})
		.catch(function(err){
			dispatch({type: "ADD_TO_CART_REJECTED", msg: "error when adding to cart"})
		})
	}
}

export function deleteCartItem(cart){
	return {
		type: "DELETE_CART_ITEM", 
		payload: cart
	}
}

export function updateCartItem(_id, unit, cart){
		const currentCart = cart;  
		const indexToUpdate = currentCart.findIndex((book) => book._id === _id);
		const newCart = {
			...currentCart[indexToUpdate], 
			quantity: currentCart[indexToUpdate].quantity + unit
		}
		const updateCart = [...currentCart.slice(0,indexToUpdate), newCart, ...currentCart.slice(indexToUpdate + 1)];
	return function(dispatch){
		axios.post("/api/cart", updateCart)
		.then(function(response){
			dispatch({type: "UPDATE_CART_ITEM", payload: response.data})
		})
		.catch(function(err){
			dispatch({type: "UPDATE_CART_REJECTED", msg: "error when adding to cart"})
		})
	}
}

