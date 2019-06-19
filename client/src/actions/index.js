import axios from "axios";
import { FETCH_USER } from "./types";

//Makes get req to server authRoutes.js to find current user
//dispatch action after request completed
export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	//only require res.data to check users login status
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};
