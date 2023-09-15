import axios from "axios";

const API_KEY = "390cacb9312cc14ce0563ea26e465ceb";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {api_key: API_KEY}

export const getTrend = async () => {
    const data = await axios.get(`/trending/movie/week`)

    return data;
}

export const getMovieForSearch = async (value) => {
    const data = await axios.get(`search/movie`, {params: {query: value}})
    return data;
}

export const getMovieForId = async (id) => {
    const data = await axios.get(`movie/${id}`)
    return data;
}

export const getActorsForId = async (id) => {
    const data = await axios.get(`movie/${id}/credits`)
    return data;
}

export const getReviewsForId = async (id) => {
    const data = await axios.get(`movie/${id}/reviews`)
    return data;
}



