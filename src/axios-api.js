import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:6500'
});

export default instance;