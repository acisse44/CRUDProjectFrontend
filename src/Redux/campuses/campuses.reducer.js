import CampusActionType from "./campuses.types";

export const INITIAL_STATE = {
  allCampuses: [],
  singleCampus: {},
};

const campusReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CampusActionType.FETCH_ALL_CAMPUSES:
       return { ...state, allCampuses: payload };
    case CampusActionType.FETCH_SINGLE_CAMPUS:
      return { ...state, singleCampus: payload };
    case CampusActionType.ADD_CAMPUS:
      return { ...state, allCampuses: [...state.allCampuses, payload]};
    case CampusActionType.DELETE_CAMPUS:
      const updatedCampuses = state.allCampuses.filter(
        (campus) => campus.id !== payload
      );
      return { ...state, allCampuses: updatedCampuses };
    default:
      return state;
  }
};

export default campusReducer;
