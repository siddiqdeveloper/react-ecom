import axios from 'axios';

const ApiService = axios.create({
    baseURL:'http://localhost:3004'
})

export default ApiService;