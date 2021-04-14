/*eslint-disable*/
import axios from 'axios';

export const Api  = axios.create({
  baseURL:'https://books.ioasys.com.br/api/v1',
})
