import axios from "axios"

const baseUrl = 'http://localhost:8091/en/';

export default axios.create({
    baseURL : baseUrl,
    headers : {
        "Content-Type" : "application/json"
    }
});

