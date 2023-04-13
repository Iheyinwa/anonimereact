const API_KEY = '694b132d661c2bdd99149164902d25d7';
const API_URL = 'https://api.themoviedb.org/3/';
const POPULAR_API = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1?_limit=6`;
const IMAGE_API = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
// const MOVIE_API = `${API_URL}movie/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos`;

export { API_KEY, API_URL, POPULAR_API, IMAGE_API };
