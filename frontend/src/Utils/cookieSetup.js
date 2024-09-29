import cookie from 'js-cookie';
import axios from 'axios';
import { isSessionValid, logoutUser } from './API/authAPI';
import { backendURL } from './config';

const API_URL = `${backendURL}/auth`;

export const setCookie = (key, value) => {
  cookie.set(key, value, { expires: 1 });
};

export const removeCookie = (key) => {
  cookie.remove(key);
};

export const getCookie = (key) => {
  return cookie.get(key);
};

export const setSessionToken = (token) => {
  setCookie('token', token);
};

export const logOut = async () => {
  const sessionId = getCookie('token');
  if (logoutUser(sessionId)) {
    console.log('logged out');
    removeCookie('token');
    return true;
  }
  return false;
};

export const isLogin = () => {
  const token = getCookie('token');
  // console.log("isLocgin:", token);
  // try {
  // 	const response = await axios.get(`${API_URL}/verifysession/${token}`);
  // 	if (response.status == 200) {
  // 		return true;
  // 	}
  // 	return false;
  // } catch (error) {
  // 	console.log(error);
  // }
  if (token) return true;
  return false;
};

export const getToken = () => {
  const token = getCookie('token');
  isLogin();
  return token;
};
