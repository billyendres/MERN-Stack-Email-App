import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Navbar, NavbarBrand } from "react-bootstrap";
import { Button } from "react-bootstrap";

import StripeBilling from "./StripeBilling";

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
				return (
					<Button>
						<a href="/auth/google" style={{ color: "white" }}>
							Login With Google
						</a>
					</Button>
				);
			default:
				return (
					<>
						<StripeBilling />
						<Button
							style={{
								color: "white",
								marginLeft: "2rem",
								marginRight: "2rem"
							}}
						>
							<a href="/api/logout" style={{ color: "white" }}>
								Logout
							</a>
						</Button>
					</>
				);
		}
	}

	render() {
		return (
			<Navbar className="justify-content-between" bg="dark" variant="dark">
				<Link
					to={this.props.auth ? "/surveys" : "/"}
					style={{
						color: "white",
						fontSize: "2rem",
						textTransform: "uppercase",
						marginLeft: "2rem",
						marginRight: "2rem"
					}}
				>
					MERN Stack Email App
				</Link>
				<NavbarBrand>
					<div>{this.displayContent()}</div>
				</NavbarBrand>
			</Navbar>
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
