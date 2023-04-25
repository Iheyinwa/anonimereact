const API_KEY = '694b132d661c2bdd99149164902d25d7';
const API_URL = 'https://api.themoviedb.org/3/';
const POPULAR_API = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_API = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const RELEASE_API = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

export { API_KEY, API_URL, POPULAR_API, IMAGE_API, RELEASE_API };
