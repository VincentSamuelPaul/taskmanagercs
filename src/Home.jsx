import React, {useState, useEffect} from 'react';
import App from './App';
import Login from './Login';
import './Home.css';

const Home = () => {

    const [user, setUser] = useState('');

    useEffect(() => {
        const getUser = localStorage.getItem('todouser')
        if (getUser) {
            setUser(getUser);
        }
    }, []);

    return (
        <div className='home'>
            { user ? <App user={user} setUser={setUser}/> : <Login user={user} setUser={setUser}/>}
            <h4 className='copyrights'>© Pavan, Varun, Vincent 12E CS 2022-23</h4>
        </div>
    )
}

export default Home