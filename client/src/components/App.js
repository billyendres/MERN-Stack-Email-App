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

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import SurveyNew from "./SurveyNew";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<h1>dev mode</h1>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Dashboard} />
					<Route exact path="/surveys/new" component={SurveyNew} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
