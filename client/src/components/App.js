//inside server directory -
//sudo npm install -g create-react-app
//create-react-app client

//add to scripts section of server package.json
// "client": "npm run start --prefix client",
// "dev": "concurrently \"npm run server\" \"npm run client\""
//npm run dev to start client & server

//in client directory -- npm i http-proxy-middleware
//add setupProxy.js file to src directory with middleware code

//Add redirect URI to google API's dev console

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
//* Imports all action creators
import * as actions from "../actions";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import SurveyNew from "./SurveyNew";

import { Container } from "react-bootstrap";

class App extends Component {
	//fetchUser action creator available
	//through connect function as props in App.js
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Container>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route exact path="/surveys/new" component={SurveyNew} />
					</Container>
				</BrowserRouter>
			</div>
		);
	}
}
//Pass in action creators
//Saved to App component as props
export default connect(
	null,
	actions
)(App);
