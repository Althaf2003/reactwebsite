import { legacy_createStore as createStore } from "redux";

import MainReducer from "./mainreducer";

const Mystore = createStore(MainReducer);

export default Mystore;


