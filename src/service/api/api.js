//https://api.coingecko.com/api/v3/coins/list => link da api das moedas online
import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
});

export default api;