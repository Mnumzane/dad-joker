import axios from 'axios'

const API_BASE_URL = 'https://api.coingecko.com/api/v3'
export const getRandomJoke = async () => {
    return await axios({
        method: 'GET',
        url: `${API_BASE_URL}`
    })
}
