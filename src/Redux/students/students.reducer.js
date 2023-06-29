// Importing the action types for students
import StudentActionType from "./students.types";

// Initial state object for students
export const INITIAL_STATE = {
  students: [],
};

// Reducer function for managing the state related to students
const studentReducer = (state = INITIAL_STATE, action) => {
  // Destructure the type and payload from the action object
  const { type, payload } = action;

  // Log a message for debugging purposes
  console.log("studentReducer is processing students action");

  // Use a switch statement to handle different action types
  switch (type) {
    // Case for handling the FETCH_ALL_STUDENTS action type
    case StudentActionType.FETCH_ALL_STUDENTS:
      // Return a new state object with the payload merged into it
      // The payload should contain the fetched students data
      return { ...state, payload };

    // Default case for handling unknown action types
    default:
      // Return the current state as is
      // This ensures that the state is not mutated if the action type is not recognized
      return state;
  }
};

// Export the studentReducer as the default export
export default studentReducer;