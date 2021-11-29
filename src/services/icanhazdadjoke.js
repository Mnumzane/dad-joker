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
export const searchForJoke = async (term) => {
    console.log(term)
    return await axios({
        headers:
            { "Accept": "application/json" },
        method: 'GET',
        url: `${API_BASE_URL}/search?term=${term}`
    })
}
