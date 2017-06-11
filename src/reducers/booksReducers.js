// step 3 define reducers 

export function booksReducers(state = {
	books: 
		[{
			id: 1, 
			title: "this is the book title", 
			description: "this is the book description",
			price: 1337
		},
		{
			id: 2, 
			title: "this is the book title 2 ", 
			description: "this is the book description 2",
			price: 1447
			}]
	}, action){
	switch(action.type){

		case "GET_BOOKS": 
		return {...state, books:[...state.books]}
		break; 
		
		case "INCREMENT": 
		return state + action.payload; 
		break;

		case "DECREMENT": 
		return state - action.payload; 
		break;

		case "POST_BOOK":
		// let books = state.books.concat(action.payload); 		// return {books}; 

		let books = [...state.books, ...action.payload]
		return Object.assign({}, state, {books});
		break; 

		case "DELETE_BOOK":
		// create a copy of the current array 
		const currentBookToDelete = [...state.books]; 
		// determine wich index in array is book to be delete 
		const indexToDelete = currentBookToDelete.findIndex((book) => book.id === action.payload.id); 
		let books2 = [...currentBookToDelete.slice(0,indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)];
		
		return Object.assign({}, state, {books: books2});
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
		Object.assign({}, state, {books: updateBooks});
	}
	
	return state; 
}







