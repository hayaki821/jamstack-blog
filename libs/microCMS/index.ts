import api from 'microCMS/api/$api';
import aspida from '@aspida/fetch';

const fetchConfig = {
  headers: {
    'X-MICROCMS-API-KEY': process.env.API_KEY ?? '',
  },
  baseURL: process.env.BASE_URL ?? '',
};

export const client = api(aspida(fetch, fetchConfig));
