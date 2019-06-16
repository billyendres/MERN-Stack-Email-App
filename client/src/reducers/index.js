import { combineReducers } from "redux";
import authReducer from "./authReducer";

//auth state is being produced by authReducer
export default combineReducers({
	auth: authReducer
});
