
import Axios from './core/Axios';
import { extend } from './helper/utils';
import defaults from './default';

function createInstance(config) {
  const axios = new Axios(config);
  const req = axios.request.bind(axios);
  extend(req, Object.getOwnPropertyNames(Axios.prototype), axios);
  extend(req, Object.getOwnPropertyNames(axios), axios);
  return req;
}

const axios = createInstance(defaults);
axios.interceptors.request.use((config) => {
  config.test = 1;
  return config;
})
console.log(axios({url:'/success'}));
export default axios;