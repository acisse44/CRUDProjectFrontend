import { combineReducers } from "redux";
import StudentReducer from "./students/students.reducer";
import CampusReducer from "./campuses/campuses.reducer";

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
    students: StudentReducer,
    campuses: CampusReducer,
  });
  
// Export the root reducer as the default export
export default rootReducer;