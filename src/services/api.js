import axios from "axios";
// https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '0404b2c465d78fa8bfd1470c74e4fde5',
        language: 'pt-BR',
        page: 1,
    }
});

export default api;