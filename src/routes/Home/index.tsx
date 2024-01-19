import CardSearchGt from '../../components/CardSearchGt';
import './styles.css';
import gitImg from '../../assets/gitimg.svg'

export default function Home() {
    return (
        <>
            <div className='git-img-container'>
                {<img src={gitImg} alt="Git Image" />}
            </div>
            <div className='home-container'>
                <CardSearchGt />
            </div>
        </>
    );
}