"use strict"

export function cartReducers(state = {cart: []}, action){	
	
	switch(action.type){
		case "ADD_TO_CART": 		
		return {...state, cart:action.payload}
		break; 
		case "DELETE_CART_ITEM":
		return {...state, cart:action.payload}
		break; 
		case "UPDATE_CART_ITEM":
		const currentBookToUpdate = [...state.cart]; 
		const indexToUpdate = currentBookToUpdate.findIndex((cart) => cart._id === action._id);
		const newBookToUpdate = {
			...currentBookToUpdate[indexToUpdate], 
			quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
		}
		const updateBooks = [...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)];
		return Object.assign({}, state, {cart: updateBooks});
		break;	
	}
	return state; 
}




