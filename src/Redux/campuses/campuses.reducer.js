// Importing the action types for campuses
import CampusActionType from "./campuses.types";

// Initial state object for campuses
export const INITIAL_STATE = {
  allCampuses: [],
  singleCampus: {},
};

// Reducer function for managing the state related to campuses
const campusReducer = (state = INITIAL_STATE, action) => {
  // Destructure the type and payload from the action object
  const { type, payload } = action;

  // Use a switch statement to handle different action types
  switch (type) {
    case CampusActionType.FETCH_ALL_CAMPUSES:
      // Return a new state object with the payload merged into it
      // The payload should contain the fetched campuses data
      return { ...state, allCampuses: payload };

    case CampusActionType.FETCH_SINGLE_CAMPUS:
      return { ...state, singleCampus: payload };

    case CampusActionType.ADD_CAMPUS:
      // Add the new campus to the allCampuses array in state
      return { ...state, allCampuses: [...state.allCampuses, payload]};

    case CampusActionType.DELETE_CAMPUS:
      // Filter out the deleted campus from the allCampuses array in state
      const updatedCampuses = state.allCampuses.filter(
        (campus) => campus.id !== payload
      );
      return { ...state, allCampuses: updatedCampuses };

    default:
      // Return the current state as is
      // This ensures that the state is not mutated if the action type is not recognized
      return state;
  }
};

// Export the campusReducer as the default export
export default campusReducer;
