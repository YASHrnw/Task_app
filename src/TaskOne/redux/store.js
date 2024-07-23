

// import {  legacy_createStore as createStore } from "redux";
// import reducer from "./reducer";
//  const store = createStore(reducer);

//  export default store


 // store.js

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
