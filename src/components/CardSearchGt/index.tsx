import { useState } from 'react';
import Gitbtn from '../GtBtn';
import './styles.css';
import CardInformation from '../CardInformation';

type FormData = {
    user: string;
};

export default function CardSearchGt() {
    const [perfil, setPerfil] = useState<string | undefined>();

    const [formData, setFormData] = useState<FormData>({
        user: ''
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const user = event.target.name;

        setFormData({ ...formData, [user]: value });
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setPerfil(formData.user);
    }

    return (
        <div className='card-container'>
            <div className='github-card '>
                <h2>Buscar Perfill</h2>

                <div className='input-container'>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                name='user'
                                value={formData.user}
                                type='text'
                                placeholder='Usuário Github'
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className='button-reset' type='submit'>
                            <Gitbtn name='Encontrar' />
                        </button>
                    </form>
                </div>
            </div>


            {perfil && (
                <div className='gt-mt20'>
                    <CardInformation perfil={perfil} />
                </div>
            )}
        </div>
    );
}
