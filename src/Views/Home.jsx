import { Navigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import { useAuth } from '../AuthContext';

function Home() {
    const authModel = useAuth();
    if (!authModel.isAuthorized) {
        return (
            // show a nice landing page here instead of redirect to login.
            // user can use login button in navbar
            <div>
                This is a nice landing page!
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>


            </div>
        );
    }

}

export default Home;