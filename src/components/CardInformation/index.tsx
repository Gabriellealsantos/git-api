import { useEffect, useState } from 'react';
import './styles.css';

type Props = {
    perfil: string | undefined;
};

type UserData = {
    avatar_url: string;
    html_url: string;
    followers: number;
    location: string;
    name: string;

};

export default function CardInformation({ perfil }: Props) {

    const [userData, setUserData] = useState<UserData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!perfil) {
                return;
            }

            try {
                const response = await fetch(`https://api.github.com/users/${perfil}`);
                if (!response.ok) {
                    throw new Error(`Erro ao buscar usuário`);
                }

                const data = await response.json();

                if (!data || Object.keys(data).length === 0) {
                    throw new Error('Resposta vazia ou formato inválido.');
                }

                setUserData(data);
                setError(null);
            } catch (error) {
                setUserData(null);

                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('Erro ao buscar usuário.');
                }
            }
        };

        fetchData();
    }, [perfil]);

    return (
        <div className='information-card'>
            {error && (
                <div className='error-message'>
                    {error}
                </div>
            )}

            {userData && !error ? (
                <div className='info-img-container'>
                    <div className='image-container'>
                        <img src={userData.avatar_url} alt={`${perfil}'s Avatar`} />
                    </div>

                    <div className='info-container'>
                        <h3>Informações</h3>
                        <p>Perfil:  <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            {userData.html_url}
                        </a></p>
                        <p>Seguidores: {userData.followers}</p>
                        <p>Localidade: {userData.location}</p>
                        <p>Nome: {userData.name}</p>
                    </div>
                </div>
            ) : !error ? (
                <p>Carregando...</p>
            ) : null}
        </div>
    );
}