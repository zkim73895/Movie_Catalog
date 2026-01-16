const API_URL = import.meta.env.VITE_API_URL

export const getMovies = async () => {
    try {
        const response = await fetch(`${API_URL}/movies`);
        if (!response.ok) {
            throw new Error("Ошибка загрузки фильмов");
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw new Error("Не удалось загрузить. Проверьте соединение с сервером.")
    }
};

export const getMoviesById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/movies/${id}`)
        if (!response.ok) {
            throw new Error('Фильм не найден')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw new Error("Не удалось загрузить фильм. Проверьте соединение с сервером")
    }
};