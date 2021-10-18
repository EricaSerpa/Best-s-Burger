import { useHistory } from 'react-router';
import error from '../../assets/img/error.png'

export const NotFound = () => {

    const history = useHistory()

    return (
        <main>
            <div className="container-notFound">
                <img src={error}
                    className="error-page"
                    alt="error-page" />
                <button className='logOut-btn' onClick={() => {
                    localStorage.clear()
                    history.push('/')
                }}>Sair
        </button>
            </div >
        </main>
    );
};
