import { GET_ALL_JOBS, POST_JOB ,RESET_FILTERS,SORT_JOBS_BY_RECENT} from "./Types.";

import axios from "axios"
export function getalljobs() {
    return function (dispatch) {
      axios
        .get("http://localhost:3001")
        .then((response) => {
          dispatch({ type: GET_ALL_JOBS, payload: response.data });
        })
        .catch(() => {
          alert("clasificados no encontrados");
        });
    };
  }


  
  export const postJobs = (payload) => {
    return async function () {
      try {
        const json = await axios.post(
          "http://localhost:3001/jobs",
          payload
        );
        return {
          type: POST_JOB,
          json: json.data,
        };
      } catch (error) {
        alert({error:error.message})
      }
    };
  };
  export const sortJobsByRecent = () => ({
    type: SORT_JOBS_BY_RECENT,
  });

  export function resetfilters(){
    return {
      type: RESET_FILTERS,
    }
  }
