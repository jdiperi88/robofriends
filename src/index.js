import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./containers/App";
import { createLogger } from "redux-logger";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { searchRobots } from "./reducers";
import thunkMiddleware from "redux-thunk";
const logger = createLogger();
const store = createStore(
	searchRobots,
	applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
