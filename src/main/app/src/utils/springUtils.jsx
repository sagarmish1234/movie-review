import { API_URL } from '../config/constants';
import axios from 'axios';

const request = async (options) => {
  const token = JSON.parse(localStorage.getItem('token'));
  var config = {
    headers: { Authorization: `Bearer ${token}` },
    baseURL: API_URL,
  };
  const instance = axios.create(config);
  const response = await instance(options);
  return response;
};

export const apiRegisterRequest = (user) => {
  return request({
    url: `/auth/register`,
    method: 'post',
    data: user,
  });
};

export const apiLoginRequest = (user) => {
  return request({
    url: `/auth/login`,
    method: 'post',
    data: user,
  });
};
