import axios from "axios";

const API_KEY = "390cacb9312cc14ce0563ea26e465ceb";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {api_key: API_KEY}

export const getTrend = async (controller) => {
    const data = await axios.get(`/trending/movie/day`, { signal: controller.signal})

    return data;
}

export const getMovieForSearch = async (value, controller) => {
    const data = await axios.get(`search/movie`, {params: {query: value}, signal: controller.signal})
    return data;
}

export const getMovieForId = async (id, controller) => {
    const data = await axios.get(`movie/${id}`, { signal: controller.signal})
    return data;
}

export const getActorsForId = async (id, controller) => {
    const data = await axios.get(`movie/${id}/credits`, {signal: controller.signal})
    return data;
}

export const getReviewsForId = async (id, controller) => {
    const data = await axios.get(`movie/${id}/reviews`, { signal: controller.signal})
    return data;
}



