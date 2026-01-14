import { useParams } from 'react-router-dom'

const Movie = () => {
    const { id } = useParams()

    return (
        <section className={"movie"}>
            <h2 className={"movie_title"}>Карточка фильма</h2>
            <p>ID фильма: {id}</p>
        </section>
    )
}

export default Movie