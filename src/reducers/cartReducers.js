"use strict"

export function cartReducers(state = {cart: []}, action){
	switch(action.type){
		case "ADD_TO_CART": 
		const cart = [...state, ...action.payload]
		return Object.assign({},{cart});
		break; 
	}
	return state; 
}