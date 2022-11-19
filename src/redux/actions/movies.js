import {MOVIE_LIST, SET_ERROR, RESPONSE_PAGE, LOAD_MORE_RESULTS, MOVIE_TYPE, SEARCH_RESULT, MOVIE_DETAILS, CLEAR_MOVIE_DETAILS} from '../types';
import {
    MOVIE_API_URL,
    SEARCH_API_URL,
    MOVIE_DETAILS_URL,
    MOVIES_CREDITS_URL,
    MOVIE_IMAGES_URL,
    MOVIES_VIDEOS_URL,
    MOVIES_REVIEWS_URL
} from '../../services/movies.service';

export const getMovies = (type, pageNumber) => async dispatch =>{
    try{
        if (query) {
         const movies = await MOVIE_API_URL(query);
         const {results} = movies.data;
         dispatchMethod(SEARCH_RESULT,results, dispatch);
        } else {
            dispatchMethod(SEARCH_RESULT,[],dispatch);
         };
    } catch (error){
        if(error.response) {
            dispatchMethod(SET_ERROR, error.response.data.message, dispatch)
        }
    }
};

export const movieDetails = (id) => async (dispatch) => {
    try{
        const details = await MOVIE_DETAILS_URL (id);
        const credits = await MOVIE_CREIDTS_URL(id);
        const images = await MOVIE_IMAGES_URL(id);
        const videos = await MOVIE_VIDEOS_URL(id);
        const reviews = await MOVIES_REVIEWS_URL(id);

        const resp = await Promise.all([details, credits, images, videos, reviews])
            .then((values) => Promise.all(values.map((value) => value.data)))
            .then((response)=> response);
        dispatchMethod(MOVIE_DETAILS,resp, dispatch);
    } catch (error){
        if(error.response) {
            dispatchMethod(SET_ERROR, error.response.data.message, dispatch)
        }
    }
};


export const loadMoreMovies = (type, pageNumber) => async dispatch =>{
    try{
        const response = await getMoviesRequest(type, pageNumber);
        const { results, payload} = response;
       dispatchMethod(MOVIE_LIST, results, dispatch);
       dispatchMethod(LOAD_MORE_RESULTS,{list: results, page: payload.page, totalPages: payload.totalPages}, dispatch);
    } catch (error){
        if(error.response){
            dispatchMethod(SET_ERROR, error.response.data.message, dispatch)
        }
    }
};

export const setResponsePageNumber = async (page, totalPages) => async (dispatch)=> {
    const payload = {page, totalPages}
    dispatchMethod(RESPONSE_PAGE,payload,dispatch);
};
export const clearMovieDetails= async (type) => async (dispatch)=> {
    dispatchMethod(MOVIE_TYPE,[],dispatch);
};

export const setMovieType = async (type) => async (dispatch)=> {
    dispatchMethod(CLEAR_MOVIE_DETAILS,type,dispatch);
}


const dispatchMethod = (type,payload,dispatch) => {
    dispatch({type,payload})
};

const getMoviesRequest = async (type, pageNumber) => {
    const movies = await MOVIE_API_URL
    const { results,page, total_pages } = movies.data;
    const payload = {
        page,
        totalPages: total_pages
    };
    return { results, payload };
}