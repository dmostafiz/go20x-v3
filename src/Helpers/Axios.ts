import axios from 'axios'
const Axios = axios.create({
    withCredentials: true,
})

Axios.defaults.baseURL = process.env.BASE_API

export default Axios
