import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware());

//Provider informs all child components of changes in state
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
