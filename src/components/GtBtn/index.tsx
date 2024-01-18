import './styles.css';

type Props = {
    name : string;
}

export default function Gitbtn({name} : Props) {
    return (
        <>
            <div className='gt-mt20 btn-gt'>
                {name}
            </div>

        </>
    );
}