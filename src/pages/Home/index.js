import {useEffect, useState} from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';
import '../../css/home.css';
import { FaStar } from 'react-icons/fa';
import SvgAcessar from '../../img/Vector.svg';
import releaseIMG from '../../img/CalendarBlank.svg';
function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes(){ const response = await api.get("movie/now_playing")
            setFilmes(response.data.results.slice(0, 4))
            setLoading(false)  // Desativa o loading apos carregar os filmes    
        }

        loadFilmes();
    }, [])

    if(loading) return <h1 className={'loadingicon'}>Carregando filmes...</h1>

        return(
        <div className={'container'}>
            <h1 className={'h1-title'}>Filmes em cartaz </h1>
            <div className={'lista-filme'}>
                {filmes.map((filme) => {
                    let popularitySnippet = filme.vote_average.toFixed(1);
                    let releaseDateSnip = filme.release_date.substring(0, 4);
                    return(
                        <article key={filme.id}>
                            <div className={'DivVote'}>
                            <strong>{filme.title}</strong>
                            <p className={'voteAverage'}><FaStar color='gold' size={18}/>{popularitySnippet}</p>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} className={'imgFilme'}alt={filme.title} />
                            <p className={'releaseDate'}><img src={releaseIMG} className={'FaCalendarE'}></img>{releaseDateSnip}</p>
                            <div className={'btn-filme'}>
                                <Link className={'LinkCenter'}to={`/filme/${filme.id}`}>
                                    <span className={'bg-icon2'}>
                                        <img src={SvgAcessar} className={'FaPlayE'}></img>
                                    </span>Acessar
                                 </Link>
                            </div>
                        </article>
                        
                    )
                })}
            </div>
        </div>
        
    )
}

export default Home;