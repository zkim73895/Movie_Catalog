import { Link } from 'react-router-dom'
import { memo } from 'react'

const MovieCard = ({ movie }) => {
    return (
        <article className={"movie-card"}>
            <Link to={`/movie/${movie.id}`} className={"movie-card__link"}>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    loading="lazy"
                    className="movie-card__image"
                />

                <div className="movie-card__content">
                    <h3 className="movie-card__title">{movie.title}</h3>
                    <span className="movie-card__year">{movie.year}</span>
                </div>
            </Link>
        </article>
    )
}

export default memo(MovieCard)