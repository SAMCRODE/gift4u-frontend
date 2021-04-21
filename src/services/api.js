import axios from "axios"


const api = axios.create({
    baseURL: "https://gift4uall.herokuapp.com/"
})

export default api;