import {useEffect, useState} from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';
import '../../css/home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import SvgAcessar from '../../img/Vector.svg';
import releaseIMG from '../../img/CalendarBlank.svg';
import Slider from 'react-slick';

function NextArrow(props){
    const {className, style, onClick} = props;
    return(
        <div 
        className={className} 
        style={{...style, display: 'block', right: '10px', zIndex:1}}
        onClick={onClick}
        />
    )
}
function PrevArrow(props){
    const {className, style, onClick} = props;
    return(
        <div 
        className={className} 
        style={{...style, display: 'block', left: '10px', zIndex:1}}
        onClick={onClick}
        />
    )
}

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes(){ const response = await api.get("movie/now_playing")
            setFilmes(response.data.results.slice(0, 7))
            setLoading(false)  // Desativa o loading apos carregar os filmes    
        }

        loadFilmes();
    }, [])

    if(loading) return <h1 className={'loadingicon'}>Carregando filmes...</h1>
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
    };

        return(
        <div className={'container'}>
            <h1 className={'h1-title'}>Filmes em cartaz </h1>
            <Slider {...settings} className={'lista-filme'}>
                {filmes.map((filme) => {
                    let popularitySnippet = filme.vote_average.toFixed(1);
                    let releaseDateSnip = filme.release_date.substring(0, 4);
                    return(
                        <div key={filme.id}>
                            <article>
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
                        </div>
                    )
                })}
            </Slider>
        </div>
        
    );
}

export default Home;