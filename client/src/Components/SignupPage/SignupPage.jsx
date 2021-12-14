import './SignupPage.css';

const SignupPage = () => {
    return (
        <div className="Container">
            <div className="top__bar">
                <img src="images/Logo.png" alt="logo" className="logo__img" />
            </div>

            <div className="product_name">
                ORCA Pot-One pot fits all
                <span>by Everstt</span>
            </div>

            
            <div className="signup__box">
                <div className="ctreate_account">
                    <span className='heading_span'>Create an account</span>
                    <input type="text" name="" className='ctreate_account_input' placeholder='Name' />
                    <input type="email" name="" className='ctreate_account_input' placeholder='Email' />
                    <input type="password" name="" className='ctreate_account_input' placeholder='Password' />
                    <input type="password" name="" className='ctreate_account_input' placeholder='Confirm Password' />

                    <div className="check_div">
                        <input type="checkbox" name="" id="" />
                        <span>Send me a weekly mix of handpicked projects, plus occasional
                        Kickstarter news</span>
                    </div>

                    <div className="check_div">
                        <input type="checkbox" name="" id="" />
                        <span>Contact me about participating in Kickstarter research</span>
                    </div>

                    <button className='create_account_btn'>Create account</button>

                    <div className="privacy_policy">
                        By signing up, you agree to our <span>Privacy Policy, Cookie Policy</span> and  <span>Terms of Use.</span> 
                    </div>
                    <span className='readmore_span'>Read more</span>
                </div>

                <div className="more_option">
                    <span className='heading_span'>More options</span>
                    <button className='login_btn'>Log in</button>
                    <button className='fb_btn'>Continue with Facebook</button>

                    <span className="get_notified">
                    Get notified when your friends back and launch projects. We'll never post anything on Facebook without your permission.
                    </span>

                    <span className='readmore_span'>Read more</span>
                </div>
            </div>
            <span className="captcha_span">
                This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service apply.</span>
            </span>
            




            <div className="bottom__bar">
                <div>
                    <span>Blog</span>
                    <span>Help</span>
                    <span>Creator Handbook</span>
                    <span>Our Rules</span>
                    <span>Stats</span>
                    <span>Press</span>
                    <span>Team</span>
                    <span>Jobs</span>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
