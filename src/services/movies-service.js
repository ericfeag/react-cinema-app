import axios from 'axios';

const REQUEST_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL  = 'https://image.tmdb.org/t/p/original'
const API_KEY = process.env.REACT_APP_API_SECRET; 

export const API_URL = async(type, page) =>{
    const response = await axios.get(`${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
    return response;
};

export const MOVIES_DETAILS_URL = async(id) =>{
    const response = await axios.get(`${REQUEST_URL}/movie/${ID}?api_key=${API_KEY}&language=en-US`);
    return response;
};

export const MOVIES_CREDITS_URL = async(id) =>{
    const response = await axios.get(`${REQUEST_URL}/movie/${ID}/credits?api_key=${API_KEY}&language=en-US`);
    return response;
};

export const MOVIES_IMAGES_URL = async(id) =>{
    const response = await axios.get(`${REQUEST_URL}/movie/${ID}/images?api_key=${API_KEY}&language=en-US&include_image_lenguage=en`);
    return response;
};

export const MOVIES_VIDEOS_URL = async(id) =>{
    const response = await axios.get(`${REQUEST_URL}/movie/${ID}/videos?api_key=${API_KEY}&language=en-US`);
    return response;
};

export const MOVIES_REVIEWS_URL = async(id, page = 1) =>{
    const response = await axios.get(`${REQUEST_URL}/movie/${ID}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`);
    return response;
};