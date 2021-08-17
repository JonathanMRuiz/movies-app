import style from './MovieCards.module.css'
const MovieCards = ({movie}) =>{
    const imagenURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        
        <li className={style.movieCard}>
            <img
            width={230}  
            height={345}
            className={style.movieImage} 
            src={imagenURL} 
            alt={movie.title}/>
            <div>{movie.title}</div>
        </li>
        )
}

export default MovieCards;