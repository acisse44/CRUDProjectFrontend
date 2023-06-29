import axios from "axios";
import StudentActionType from "./students.types";

export const fetchAllStudents = (payload) => {
    console.log("Fetch all students action");
    return {
        type: StudentActionType.FETCH_ALL_STUDENTS,
        payload: payload,
    };
};

export const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
                console.log("fetchAllStudentsThunk is firing");
                const resposne = await axios.get("http://localhost:8080/api/students");
                console.log("fetchAllStudentsThunk completed");
                dispatch(fetchAllStudents(resposne.data));
        } catch (error) {
            console.error(error);
        }
    };
};