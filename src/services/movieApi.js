const API_URL = 'http://localhost:3002/movies'

export const getMovies = async () => {
    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error('Ошибка загрузки')
    }

    return response.json()
}