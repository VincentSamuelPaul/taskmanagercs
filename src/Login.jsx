import React, {useState} from 'react';
import './Login.css';

const Login = ({user, setUser}) => {

    const [message, setMessage] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async() => {
        if (username === '' && password === '') {
            setMessage('username and password cant be none');
        }
        else if (username.length < 5 && password.length < 5 ) {
            setMessage('username and password must longer than 5 characters')
        }
        else {
            const response = await fetch('http://127.0.0.1:8000/api/signup/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'username':username, 'password':password})
            });
            const data = await response.json()
            if (response.status === 200) {
                if (data.message === 'true') {
                    localStorage.setItem('todouser',username);
                    setUser(username);
                } else {
                    setMessage(data.message);
                };
            } else {
                setMessage('Server error');
            };
            }
    };

    const logIn = async() => {
        if (username === '' && password === '') {
            setMessage('username and password cant be none');
        }
        else {
            const response = await fetch('http://127.0.0.1:8000/api/login/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'username':username, 'password':password})
            });
            const data = await response.json()
            if (response.status === 200) {
                if (data.message === 'true') {
                    localStorage.setItem('todouser',username);
                    setUser(username);
                } else {
                    setMessage(data.message);
                };
            } else {
                setMessage('Server error');
            };
            }
    };


    return (
        <div className='login'>
            <div className='login-form'>
                <h4 className='head'>Task Manager</h4>
                <input value={username} required onChange={(e) => setUsername(e.target.value)} className='username' placeholder='Username'/>
                <input value={password} required onChange={(e) => setPassword(e.target.value)} className='password' type='password' placeholder='Password'/>
                <h6 className='message'>{message}</h6>
                <button onClick={() => logIn()} className='botn1'>Log-in</button>
                <h6 className='or'>or</h6>
                <button onClick={() => signUp()} className='botn2'>Sign-Up</button>
            </div>
        </div>
    )
}

export default Login