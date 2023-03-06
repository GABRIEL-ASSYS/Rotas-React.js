import { Link } from 'react-router-dom';

function Contato(){
    
    return(
        <div>
            <h1>Página de contato</h1>
            <span>Contato da empresa (dd) XXXXX-XXXX</span>

            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
        </div>
    );
}

export default Contato