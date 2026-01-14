import { useEffect, useState } from "react";
import { getMovies } from "../../services/movieApi.js";
import MovieCard from '../../components/MovieCard/MovieCard'

const Home = () => {
    const [movie, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getMovies()
            .then(data => setMovies(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error}</p>

  return (
    <section className="home">
        <h2 className="home__title">Список фильмов</h2>

        <div className="home__grid">
            {movie.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </section>
  )
}

export default Home
