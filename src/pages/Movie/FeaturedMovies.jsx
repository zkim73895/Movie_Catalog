import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FeaturedMovies = ({ movies }) => {
    const listRef = useRef(null)
    const isPaused = useRef(false)
    const animationRef = useRef(null)

    const baseMovies = movies.slice(4, 17)
    const infiniteMovies = [...baseMovies, ...baseMovies, ...baseMovies]

    const initScroll = () => {
        const container = listRef.current
        if(!container) return

        const singleListWidth = container.scrollWidth / 3
        container.scrollLeft = singleListWidth

        return singleListWidth;
    }

    useEffect(() => {
        const container = listRef.current
        if (!container) return

        let singleListWidth = initScroll();

        const scroll = () => {
            if (!isPaused.current) {
                container.scrollLeft += 0.4

                if (container.scrollLeft >= singleListWidth * 2) {
                    container.scrollLeft = singleListWidth
                }
            }

            animationRef.current = requestAnimationFrame(scroll)
        };

        animationRef.current = requestAnimationFrame(scroll)

        const handleResize = () => {
            cancelAnimationFrame(animationRef.current)
            singleListWidth = initScroll()
            animationRef.current = requestAnimationFrame(scroll)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            cancelAnimationFrame(animationRef.current)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <section className="featured">
            <h2 className="featured__title">Популярно сейчас</h2>

            <div className="featured__list" ref={listRef} onMouseEnter={() => (isPaused.current = true)} onMouseLeave={() => isPaused.current = false}>
                {infiniteMovies.map((movie, index) =>
                    <Link to={`/movie/${movie.id}`} key={`${movie.id}-${index}`} className="featured-card">
                        <img src={movie.poster} alt={movie.title} className="featured-card__image"/>
                    </Link>
                )}
            </div>
        </section>
    )
}

export default FeaturedMovies