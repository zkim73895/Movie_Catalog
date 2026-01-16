import { useCallback, useEffect, useState } from "react";
import { getMovies } from "../../services/moviesApi.js";
import MovieCard from '../../components/MovieCard/MovieCard';
import Search from "../../components/Search/Search.jsx";
import FeaturedMovies from "../Movie/FeaturedMovies.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMesage.jsx";

const Home = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
        getMovies()
            .then(data => {
                setMovies(data)
                setFilteredMovies(data)
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    const handleSearch = useCallback((value) => {
        const query = value.toLowerCase()

        const result = movies.filter(movie => movie.title.toLowerCase().includes(query))

        setFilteredMovies(result)
    }, [movies])

    if (loading) return <p>Загрузка...</p>
    if (error) return <ErrorMessage message={error}/>

  return (
    <section className="home container">
        <FeaturedMovies movies={movies} />

        <h2 className="home__title">Список фильмов</h2>

        <Search onSearch={handleSearch} />

        <div className="home__grid">
            {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </section>
  )
}

export default Home