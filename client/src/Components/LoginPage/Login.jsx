import axios from 'axios';
import { useState } from 'react';
import './login.css';

const init = {
    email: "",
    password: "",
}

const LoginPage = () => {
    const [loginDetails, setLodindetails] = useState(init);

const handleLoginChange = (e) => {
    const {name, value} = e.target;
    setLodindetails({...loginDetails, [name]: value});
}

const handleLogin = async() => {
    const data = await fetch("http://localhost:2357/login",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(loginDetails)
    })
    const dt = await data.json();
    if(data.status === 201){
        const { user, token } = dt;
        console.log(user, token);
        alert("log in successful");
    } else {
        alert("something went wrong");
    }
}

    return (
        <section className="login-cont">
            <div>
                <h1>Log in</h1>
                <input onChange={ handleLoginChange } type="email" name="email" className='login-email-input' placeholder='Email' />
                <input onChange={ handleLoginChange } type="password" name="password" className='login-password-input' placeholder='Password' />
                <p>Forgot your password?</p>
                <button onClick={ handleLogin }>Log in</button>
                <button>Continue with Facebook</button>
                <button>Continue with Google</button>
            </div>
        </section>
    )
}

export default LoginPage;
