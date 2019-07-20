/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADD_SMURFS_START,
  ADD_SMURFS,
  ADD_SMURFS_FAILURE,
  GET_SMURF_START,
  GET_SMURF,
  GET_SMURF_FAILURE
} from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case GET_SMURF:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case GET_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_SMURFS_START:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURFS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    case ADD_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
