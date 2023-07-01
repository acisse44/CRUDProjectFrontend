import axios from "axios";
import StudentActionType from "./students.types";

export const addStudent = (studentData) => {
    console.log("Add student action");
    return {
      type: StudentActionType.ADD_STUDENT,
      payload: studentData,
    };
};

// Thunk function to asynchronously add a single student and dispatch the action
export const addStudentThunk = (studentData) => {
    return async (dispatch) => {
        try {
            console.log("addStudentThunk is firing");
            // Make an asynchronous request to add a student to the server
            const response = await axios.post(
                "http://localhost:8080/api/students",
                studentData
            );
            console.log("addStudentThunk completed");
            // Dispatch the addStudent action with the response data
            dispatch(addStudent(response.data));
        } catch (error) {
            console.error(error);
      }
    };
};

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
            const response = await axios.get("http://localhost:8080/api/students");
            // , {
            //     headers: {
            //     "Access-Control-Allow-Origin": "http://localhost:3000",
            //     },
            // });
            console.log("fetchAllStudentsThunk completed");
            // Dispatch the fetchAllStudents action with the response data
            dispatch(fetchAllStudents(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};


// Action creator function to fetch a single student
export const fetchSingleStudent = (payload) => {
    console.log("Fetch a single student action");
    return {
        type: StudentActionType.FETCH_SINGLE_STUDENT,
        payload: payload,
    };
};

// Thunk function to asynchronously fetch a single student and dispatch the action
export const fetchSingleStudentThunk = (studentId) => {
    return async (dispatch) => {
        try {
            console.log("fetchSingleStudentThunk is firing");
            // Make an asynchronous request to fetch a single student from the server
            const response = await axios.get(`http://localhost:8080/api/students/${studentId}`); 
            //     , {
            //     headers: {
            //     "Access-Control-Allow-Origin": "http://localhost:3000",
            //     },
            // });
            console.log("fetchSingleStudentThunk completed");
            // Dispatch the fetchSingleStudent action with the response data
            dispatch(fetchSingleStudent(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

// Action creator function to delete a student
export const deleteAStudent = (payload) => {
    console.log("Delete a student action");
    return {
        type: StudentActionType.DELETE_STUDENT,
        payload: payload,
    };
};

// Thunk function to asynchronously delete a campus and dispatch the action
export const deleteAStudentThunk = (studentId) => {
    return async (dispatch) => {
        try {
            console.log("deleteAStudentThunk is firing");
            // Make an asynchronous request to delete a campuses from the server
            const response = await axios.delete(`http://localhost:8080/api/students/${studentId}`);
            console.log("deleteAStudentThunk completed");
            // Dispatch the deleteAStudent action with the response data
            dispatch(deleteAStudent(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};