import { GET_ALL_JOBS, POST_JOB, RESET_FILTERS, SORT_JOBS_BY_RECENT } from "./Types.";

const initialState = {
  allJobs: [],
  resPostdb: [],
  sortedJobs: [], // Agrega la propiedad sortedJobs al estado
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        allJobs: action.payload,
        ResetJobs:action.payload
      };

    case POST_JOB:
      return {
        ...state,
        resPost: action.json,
      };

      case RESET_FILTERS:
        return {
          ...state,
          allJobs: [...state.ResetJobs],
        };

      case SORT_JOBS_BY_RECENT:
        const sortedJobs = [...state.allJobs].sort((a, b) => {
          return new Date(b.fechaPublicacion) - new Date(a.fechaPublicacion);
        });
        
  
        return {
          ...state,
          allJobs: sortedJobs,
        };

    default:
      return state;
  }
}