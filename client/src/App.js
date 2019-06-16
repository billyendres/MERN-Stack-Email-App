import React from "react";
import logo from "./logo.svg";
import "./App.css";

//inside server directory -
//sudo npm install -g create-react-app
//create-react-app client
//add to scripts section of server package.json
// "client": "npm run start --prefix client",
// "dev": "concurrently \"npm run server\" \"npm run client\""
//npm run dev to start client & server

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
