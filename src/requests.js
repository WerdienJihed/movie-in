const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchSearchMovie: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

export default requests;
