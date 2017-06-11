"use strict"

export function cartReducers(state = {cart: []}, action){	
	
	switch(action.type){
		case "ADD_TO_CART": 		
		return {...state, cart:action.payload, totalAmount: totals(action.payload).amount, totalQty: totals(action.payload).qty }
		break; 
		case "DELETE_CART_ITEM":
		return {...state, cart:action.payload, totalAmount: totals(action.payload).amount, totalQty: totals(action.payload).qty }
		break; 
		case "UPDATE_CART_ITEM":
		const currentBookToUpdate = [...state.cart]; 
		const indexToUpdate = currentBookToUpdate.findIndex((cart) => cart._id === action._id);
		const newBookToUpdate = {
			...currentBookToUpdate[indexToUpdate], 
			quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
		}
		const updateBooks = [...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)];
		return Object.assign({}, state, {cart: updateBooks, totalAmount: totals(updateBooks).amount, totalQty: totals(updateBooks).qty});
		break;	
	}
	return state; 
}

export function totals(payloadArr){
	const totalAmount = payloadArr.map((cartArr)=>{
		return cartArr.price * cartArr.quantity; 

	}).reduce((a,b)=>{
		return a + b; 
	}, 0);

	const totalQuantity = payloadArr.map((qty)=>{
		return qty.quantity; 

	}).reduce((a,b)=>{
		return a + b; 
	},0); 

	return {amount: totalAmount.toFixed(2), qty: totalQuantity};
}




