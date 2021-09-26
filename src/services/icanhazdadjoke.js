import axios from 'axios'

const API_BASE_URL = 'https://icanhazdadjoke.com'
export const getRandomJoke = async () => {
    return await axios({
        headers:
            { "Accept": "application/json" },
        method: 'GET',
        url: `${API_BASE_URL}/`
    })
}

