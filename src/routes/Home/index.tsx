import { Link } from 'react-router-dom';
import Gitbtn from '../../components/GtBtn';
import './styles.css';

export default function Home() {
    return (
        <>
            <div className='home-container'>
                <h1>Desafio Github API</h1>
                <p>DevSuperior - Escola de programação</p>
                <Link to='/searchprofile'>
                    <Gitbtn name='Começar' />
                </Link>

            </div>
        </>
    );
}