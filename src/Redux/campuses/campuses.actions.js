import axios from "axios";
import CampusActionType from "./campuses.types";

// Action creator function to fetch all campuses
export const fetchAllCampuses = (payload) => {
    console.log("Fetch all campuses action");
    return {
        type: CampusActionType.FETCH_ALL_CAMPUSES,
        payload: payload,
    };
};

// Thunk function to asynchronously fetch all students and dispatch the action
export const fetchAllCampusesThunk = () => {
    return async (dispatch) => {
        try {
            console.log("fetchAllCampusessThunk is firing");
            // Make an asynchronous request to fetch all campuses from the server
            const response = await axios.get("http://localhost:8080/api/campuses");
            console.log("fetchAllCampusesThunk completed");
            // Dispatch the fetchAllCampuses action with the response data
            dispatch(fetchAllCampuses(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};