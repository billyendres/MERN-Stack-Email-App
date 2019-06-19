// import action type
import { FETCH_USER } from "../actions/types";
//Auth Reducer checks if user is logged in

//null is initial state (doesn't know if user is logged in)
//action.payload returns user model || false
// " " === true so return false (not logged in)
export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}

//DUMMY FUNCTION
// export default function(state = {}, action) {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// }
