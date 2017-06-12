"use strict"; 

import React from "react";
import Menu from "./components/menu.jsx";
import Footer from "./components/footer.jsx";  

class Main extends React.Component{
	render(){
		return(
			<div>
				<Menu />
					{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default Main; 