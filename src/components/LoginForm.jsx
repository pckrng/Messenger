import { useState } from 'react';
import axios from 'axios';

const handleSubmit = () => {

}

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}></form>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            </div>
        </div>
    )
}