"use strict"

export function cartReducers(state = {cart: []}, action){
	switch(action.type){
		case "ADD_TO_CART": 
		const cart = [...state.cart, ...action.payload]
		state.cart = cart; 
		return state;
		break; 
	}
	return state; 
}