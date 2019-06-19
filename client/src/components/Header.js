import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Navbar, NavbarBrand } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

//Run a switch statement to determine -
//1: null - not sure of user login
//2: User logged in
//3: Users not logged in
class Header extends Component {
	displayContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <Link to="/auth/google">Login With Google</Link>;
			default:
				return <Link to="/api/logout">Logout</Link>;
		}
	}

	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Col lg={10}>
						<NavbarBrand>
							<Link
								to={this.props.auth ? "/surveys" : "/"}
								style={{ color: "white", textTransform: "uppercase" }}
							>
								MERN Stack Email App
							</Link>
						</NavbarBrand>
					</Col>
					<Col lg={2}>
						<Button onClick={this.displayContent()} variant="outline-primary">
							{this.displayContent()}
						</Button>
					</Col>
				</Navbar>
			</div>
		);
	}
}

//Desctructured - run a console.log(this.props)
//Object one should return null before authReducer function runs
//Object two should return users auth state
const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
