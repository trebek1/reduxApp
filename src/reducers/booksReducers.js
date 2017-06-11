// step 3 define reducers 

export function booksReducers(state = {books: []}, action){
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
