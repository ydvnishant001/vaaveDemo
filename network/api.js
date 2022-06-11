import axios from 'axios'

const api = () => {
    const instance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
    })
    return instance
}

export default api()