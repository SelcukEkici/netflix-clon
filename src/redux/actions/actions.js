import axios from "axios";
import { actionTypes } from "./ActionsTypes";
import { options } from "../../constants/apiConstants";



axios.defaults.baseURL = "https://api.themoviedb.org/3";


export const setLoading=(payload)=>({
    type:actionTypes.SET_LOADING,
    payload
})




export const getMovies = () => {
  return async function (dispatch) {
    const response = await axios.get("/movie/popular", options);
    dispatch({
      type: actionTypes.SET_MOVIES,
      payload: response.data.results,
    });
  };
};




export const getGenres=()=>(dispatch)=>{

  axios.get('/genre/movie/list?language=tr',options).

  then((response)=>dispatch({
    type:actionTypes.SET_CATEGORIES,
    payload:response.data.genres
  }))
}
