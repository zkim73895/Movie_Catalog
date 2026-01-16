import { useParams, Link } from 'react-router-dom'
import { useEffect, useState} from "react";
import { getMoviesById } from "../../services/moviesApi.js";


const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getMoviesById(id)
            .then(data => setMovie(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error}</p>

    return (
        <section className={"movie container"}>
            <Link to="/" className="movie__back">Назад</Link>

            <div className="movie__content">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie__poster"
                />

                <div className="movie__info">
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie__year">Год производства: {movie.year}</p>
                    <p className="movie__genre">Жанр: {movie.genre}</p>
                    <p className="movie__rating">Рейтинг: {movie.rating}</p>
                    <p className="movie__description">{movie.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Movie