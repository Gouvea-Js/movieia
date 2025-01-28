import { Link} from 'react-router-dom'
import '../../css/erro.css';

function Erro(){
    return(
        <div className={'containerErro'}>
            <h2>Error 404</h2>
            <h1>Ops, algo deu errado!</h1>
            <p>Parece que você está tentando acessar uma página que não existe.</p>
            <Link to="/">Voltar para Home</Link>
        </div>
    )
}

export default Erro;