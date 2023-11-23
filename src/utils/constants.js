export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const userIcon =
  "https://imgs.search.brave.com/b69e8q5lU7TpfQeQ_7q81DkY4si8IvS3R-ie2g12GP0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzc2LzY5LzY3/LzM2MF9GXzU3NjY5/Njc1MV9zb2NXTXRl/aEVXcDRTeXZEbEp0/c3RJQWtCYWtrR1RW/ay5qcGc";

export const MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

// export const MOVIES_URL =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};
