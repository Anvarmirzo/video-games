import {config} from 'dotenv';

config();

export const environment = {
  production: true,
  BASE_URL: process.env['BASE_URL'],
  API_KEY: process.env['API_KEY'],
  API_HOST: process.env['API_HOST']
};
