import { Link } from 'react-router-dom';

function Home() {

    return(
        <div>
            <h1>Bem-vindo a página HOME</h1>
            <span>Gabriel Assys</span>

            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>

            <hr/>

            <Link to="/produto/12345">Acessar Produto</Link>
        </div>
    );
}

export default Home