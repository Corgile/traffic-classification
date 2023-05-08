import axios from 'axios'

let requests = axios.create({
    baseURL: 'http://127.0.0.1:8002',
    timeout: 5000
})


export default requests