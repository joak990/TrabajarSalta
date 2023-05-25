import { GET_ALL_JOBS } from "./Types.";
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