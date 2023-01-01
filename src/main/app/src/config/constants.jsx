// export const BASE_URL = 'http://localhost:2510';
const APPLICATION_NAME = "movieReview"
export const BASE_URL = `${window.location.host}/${APPLICATION_NAME}`;

export const API_URL = BASE_URL + '/api';

export const MOVIE_URL = 'https://api.themoviedb.org/3';

export const API_KEY = '4aa1455558dbe00a69ee3fff3a2172b8';

export const IMAGE_URL = 'https://image.tmdb.org/t/p';

export const MOVIE_SLIDER_URLS = {
  popular: {
    title: "What's Popular ",
    urls: [
      {
        url: '/movie/now_playing',
        title: 'Now Playing',
      },
      {
        url: '/tv/on_the_air',
        title: 'On Air',
      },

      {
        url: '/movie/popular',
        title: 'Popular',
      },
    ],
  },
  upcoming: {
    title: 'Upcoming',
    urls: [
      {
        url: '/movie/upcoming',
        title: 'Movie',
      },
      {
        url: '/tv/airing_today',
        title: 'TV',
      },
    ],
  },
  trending: {
    title: 'Trending',
    urls: [
      {
        url: '/trending/all/day',
        title: 'Today',
      },
      {
        url: '/trending/all/week',
        title: 'Week',
      },
    ],
  },
};
