import MovieCards from './MovieCards';
import movies from './movies.json'
import style from './MoviesGrid.module.css';

const MoviesGrid = () => {
    return (
        <ul className={style.movieGrid}>
            {movies.map((movie) => {
                return <MovieCards key={movie.id} movie={movie} />
            })}
        </ul>

    )
}

export default MoviesGrid;