
import { GET_ALL_JOBS } from "./Types.";

const initialState = {
     allJobs: [],
    };

    export default function rootReducer(state = initialState, action) {
        switch (action.type) {
            case GET_ALL_JOBS:
      return {
        ...state,
        allJobs: action.payload,
        
      
      };
          default: 
    return state
            
        }
      }