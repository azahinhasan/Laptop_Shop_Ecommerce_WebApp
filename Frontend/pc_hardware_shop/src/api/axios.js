import axios from 'axios';


const  instance = axios.create({
    baseURL:'http://localhost:3819/api',
});


//instance.defaults.headers.common['Authorization'] = "AUTH TOKEN";

export default instance;