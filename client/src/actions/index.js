import axios from "axios";
import { FETCH_USER } from "./types";

//Makes get req to server authRoutes.js to find current user
//dispatch action after request completed
export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({
		type: FETCH_USER,
		payload: res
	});
};
