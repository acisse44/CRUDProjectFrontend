import axios from "axios";
import CampusActionType from "./campuses.types";

export const addCampus = (campusData) => {
    console.log("Add campus action");
    return {
      type: CampusActionType.ADD_CAMPUS,
      payload: campusData,
    };
};

export const addCampusThunk = (campusData) => {
    return async (dispatch) => {
        try {
            console.log("addCampusThunk is firing");
            const response = await axios.post(
                "http://localhost:8080/api/campuses",
                campusData
            );
            console.log("addCampusThunk completed");
            dispatch(addCampus(response.data));
            dispatch(fetchAllCampusesThunk());
        } catch (error) {
            console.error(error);
      }
    };
};

export const fetchSingleCampus = (payload) => {
    console.log("Fetch single campus action");
    return {
        type: CampusActionType.FETCH_SINGLE_CAMPUS,
        payload: payload,
    };
};

export const fetchSingleCampusThunk = (campusId) => {
    return async (dispatch) => {
        try {
            console.log("fetchSingleCampusThunk is firing");
            const response = await axios.get(`http://localhost:8080/api/campuses/${campusId}`);
            console.log("fetchSingleCampusThunk completed");
            dispatch(fetchSingleCampus(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const fetchAllCampuses = (payload) => {
    console.log("Fetch all campuses action");
    return {
        type: CampusActionType.FETCH_ALL_CAMPUSES,
        payload: payload,
    };
};

export const fetchAllCampusesThunk = () => {
    return async (dispatch) => {
        try {
            console.log("fetchAllCampusesThunk is firing");
            const response = await axios.get("http://localhost:8080/api/campuses");
            console.log("fetchAllCampusesThunk completed");
            dispatch(fetchAllCampuses(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const deleteACampus = (payload) => {
    console.log("Delete a campus action");
    return {
        type: CampusActionType.DELETE_CAMPUS,
        payload: payload,
    };
};

export const deleteACampusThunk = (campusId) => {
    return async (dispatch) => {
        try {
            console.log("deleteACampusThunk is firing");
            const response = await axios.delete(`http://localhost:8080/api/campuses/${campusId}`);
            console.log("deleteACampusThunk completed");
            dispatch(deleteACampus(response.data));
            dispatch(fetchAllCampusesThunk());
        } catch (error) {
            console.error(error);
        }
    };
};