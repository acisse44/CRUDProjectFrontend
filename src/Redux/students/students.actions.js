import axios from "axios";
import StudentActionType from "./students.types";

// Action creator function to fetch all students
export const fetchAllStudents = (payload) => {
    console.log("Fetch all students action");
    return {
        type: StudentActionType.FETCH_ALL_STUDENTS,
        payload: payload,
    };
};

// Thunk function to asynchronously fetch all students and dispatch the action
export const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
            console.log("fetchAllStudentsThunk is firing");
            // Make an asynchronous request to fetch all students from the server
            const response = await axios.get("http://localhost:8080/api/students", {
                headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                },
            });
            console.log("fetchAllStudentsThunk completed");
            // Dispatch the fetchAllStudents action with the response data
            dispatch(fetchAllStudents(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};