import client from './client';
import {LOGIN_API} from '@env';

console.log(LOGIN_API);
const login = (username, password) =>
  client.post('/authenticate', {username, password});

export default {
  login,
};
