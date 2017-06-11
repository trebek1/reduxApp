"use strict"; 

import React from "react"; 
import {connect} from "react-redux"; 
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {deleteCartItem} from "../../actions/cartActions";   

class Cart extends React.Component{

	onDelete(_id){

		const currentBookToDelete = this.props.cart; 
		const indexToDelete = currentBookToDelete.findIndex((cart) => cart._id === _id); 
		let cartAfterDelete = [...currentBookToDelete.slice(0,indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)];
		this.props.deleteCartItem(cartAfterDelete); 
	}

	renderEmpty(){
		return <div></div>
	}

	renderCart(){
		
		const cartItemsList = this.props.cart.map((cartArr) => {
			return(
				<Panel key={cartArr._id}>
					<Row>
						<Col xs={12} sm={4}>
							<h6> {cartArr.title}</h6><span>    </span>

						</Col>
						<Col xs={12} sm={2}>
							<h6>usd. {cartArr.price}</h6>
						</Col>
						<Col xs={12} sm={2}>
							<h6>qty. <Label bsStyle="success"></Label></h6>
						</Col>
						<ButtonGroup style={{minWidth: "30px"}}>
							<Button bsStyle="default" bsSize="small">-</Button>
							<Button bsStyle="default" bsSize="small">+</Button>
							<span>     </span>
							<Button onClick={this.onDelete.bind(this, cartArr._id)} bsStyle="danger" bsSize="small">Delete</Button>
						</ButtonGroup>
					</Row>
				</Panel>
			)
		},this);

		return(
			<Panel header="Cart" bsStyle="primary">
				{cartItemsList}
			</Panel>
		)
	}

	render(){
		if(this.props.cart[0]){
			return this.renderCart(); 
		}else{
			return this.renderEmpty(); 
		}
		
	}
}

function mapStateToProps(state){
	return {
		cart: state.cart.cart
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		deleteCartItem
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart); 



