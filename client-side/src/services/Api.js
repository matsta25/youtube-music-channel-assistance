import axios from 'axios'

const baseDomain = 'http://localhost:8081'

export default() => {
    return axios.create({
        baseURL: `${baseDomain}/api`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}