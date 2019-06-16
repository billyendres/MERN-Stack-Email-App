import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Col lg={10}>
						<Navbar.Brand href="/">MERN Stack Email App</Navbar.Brand>
					</Col>
					<Col lg={2}>
						<Button variant="outline-primary">Login With Google</Button>
					</Col>
				</Navbar>
			</div>
		);
	}
}

export default Header;
