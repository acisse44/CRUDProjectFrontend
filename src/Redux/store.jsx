import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

// Create a logger instance with collapsed option set to true
const logger = createLogger({ collapsed: true });

// Compose middleware with dev tools and apply logger and thunk middleware
const middleWare = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), logger)
);

// Create the Redux store by passing the root reducer and middleware
const store = createStore(rootReducer, middleWare);

// Export the store as the default export
export default store;