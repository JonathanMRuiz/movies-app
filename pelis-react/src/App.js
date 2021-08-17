import MoviesGrid from './components/MoviesGrid'
import style from './App.module.css';
const App = () => {
    return (
        <div>
            <header>
                <h1 className={style.titulo}>Peliculas</h1>
            </header>
            <main>
                <MoviesGrid />
            </main>
        </div>
    )
}

export default App;