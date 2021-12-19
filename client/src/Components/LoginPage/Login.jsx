import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoNav from '../FirstPage/LogoNavbar/LogoNav';
import { Footer } from '../Footer/Footer';
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
        <div className='L_container'>
            <LogoNav />
            <div className='login_cont'>
                <div className='login_head'>Log in</div>
                <input onChange={ handleLoginChange } type="email" name="email" className='login-email-input' placeholder='Email' />
                <input onChange={ handleLoginChange } type="password" name="password" className='login-password-input' placeholder='Password' />
                <span>Forgot your password?</span>
                <div className="remeber_me_checkbox">
                    <input type="checkbox" />
                    Remember me
                </div>
                <Link to="/carddetail"><button className='login1_btn' onClick={handleLogin}>Log in</button></Link>
                {/* <button className='login1_btn' onClick={ handleLogin }><Link to="/carddetail">Log in</Link></button> */}
                
                <div className="lines"><div className="common_line"></div>Or<div className="common_line"></div></div>
                <button  className='fb1_btn'>Continue with Facebook</button>
                <button  className='google_login_btn'>Continue with Google</button>

                <p className="login_para">Get notified when your friends back and launch projects. 
                We'll never post anything on Facebook without your permission.
                </p>

                <div className="new_user">New to Kickstarter?<span className='blue_span'>Sign up</span> </div>

                <div className="captcha_policy">This site is protected by reCAPTCHA and the Google <span className='blue_span'>Privacy Policy</span> and <span className='blue_span'>Terms of Service apply.</span></div>


            </div>


            <Footer />
        </div>
    )
}

export default LoginPage;
