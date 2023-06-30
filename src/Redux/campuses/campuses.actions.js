import axios from "axios";
import CampusActionType from "./campuses.types";


//Add a single campus
export const addCampus = () => {
    console.log("Add campus action");
    return {
      type: CampusActionType.ADD_CAMPUS,
    };
};

// Thunk function to asynchronously add a single campus and dispatch the action
export const addCampusThunk = (campusData) => {
    return async (dispatch) => {
        try {
            console.log("addCampusThunk is firing");
            // Make an asynchronous request to add a campus to the server
            const response = await axios.post(
                "http://localhost:8080/api/campuses",
                campusData
            );
            console.log("addCampusThunk completed");
            // Dispatch the addCampus action with the response data
            dispatch(addCampus(response.data));
        } catch (error) {
            console.error(error);
      }
    };
};

//Action creator function to fetch a single campus
export const fetchSingleCampus = (payload) => {
    console.log("Fetch single campus action");
    return {
        type: CampusActionType.FETCH_SINGLE_CAMPUS,
        payload: payload,
    };
};

// Thunk function to asynchronously fetch a single campus and dispatch the action
// export const fetchSingleCampusThunk = () => {
//     return async (dispatch) => {
//         try {
//             console.log("fetchSingleCampusThunk is firing");
//             // Make an asynchronous request to fetch a single campus from the server
//             const response = await axios.get(`http://localhost:8080/api/campuses/${campusId}`);
//             console.log("fetchSingleCampusThunk completed");
//             // Dispatch the fetchSingleCampus action with the response data
//             dispatch(fetchSingleCampus(response.data));
//         } catch (error) {
//             console.error(error);
//         }
//     };
// };

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