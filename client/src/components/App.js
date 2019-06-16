import React from "react";

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

const App = () => {
	return (
		<div>
			<a href="/auth/google">login</a>
		</div>
	);
};

export default App;
