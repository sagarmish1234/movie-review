import { MOVIE_URL, IMAGE_URL } from '../config/constants';
import axios from 'axios';

const request = async (options) => {
  var config = {
    baseURL: MOVIE_URL,
    params: {
      api_key: '4aa1455558dbe00a69ee3fff3a2172b8',
    },
  };
  const instance = axios.create(config);
  const response = await instance(options);
  return response;
};

export const getImageURL = (url, width, height) => {
  return `${IMAGE_URL}/w${width}_and_h${600}_multi_faces_filter(duotone,032541,01b4e4)${url}`;
};

export const getPosterURL = (url) => {
  return `${IMAGE_URL}/w${220}_and_h${330}_face${url}`;
};

export const indexGenerator = (start, end) => {
  return Math.floor(Math.random() * end + start);
  // return 551;
};

export const randomBackdropIndex = (response) => {
  let images = response.data.backdrops.filter(
    (image) => image.width == 1920
  );
  let index = indexGenerator(0, images.length) - 1;
  return images[index];
};

export const apiMovieInTheatres = () => {
  return request({
    url: '/movie/now_playing',
    method: 'GET',
  });
};

export const apiTvOnAir = () => {
  return request({
    url: '/tv/on_the_air',
    method: 'GET',
  });
};

export const apiHeroImageGenerate = () => {
  return request({
    url: `/movie/top_rated?page=1`,
    method: 'GET',
  });
};

export const apiFetchUrlItems = (uri) => {
  return request({
    url: uri,
    method: 'GET',
  });
};
