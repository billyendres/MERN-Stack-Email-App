import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions";

class StripeBilling extends Component {
	render() {
		return (
			<ReactStripeCheckout
				name="MERN Stack Email App"
				description="$5 For 5 Email Credits"
				amount={500}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<Button>Add Credits</Button>
			</ReactStripeCheckout>
		);
	}
}

export default connect(
	null,
	actions
)(StripeBilling);
