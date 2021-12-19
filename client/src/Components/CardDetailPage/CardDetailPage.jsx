import { Link } from 'react-router-dom';
import './CardDetailPage.css';

const CardDetailPage = () => {
    return (
        <>
        <div className="top__bar">
            <img src="images/Logo.png" alt="logo" className="logo__img" />
        </div>
        
        <div className="card_box">
            <div className="left_bar">
                <div className="heading_card">
                Pledge summary
                </div>

                <div className="card_para">
                We won’t charge you at this time. if the project reaches its funding goal,your payement
                method will be charged when the campign ends. You’ll receive a confirmation email at
                exampleemail@exmaple.com when your pledge is successfully processed.
                </div>

                <div className="product_detail_card">
                    <img src="images/fire_img.jpg" alt="" />
                    <div className="project_summary_div">
                        <p className="summary_heading">ORCA Pot-One fits all</p>
                        <span className="summary_percentage">543% funded</span>
                        <span className="everest_summary">By Everstt</span>
                    </div>
                </div>

                <div className="heading1_card">
                Your plege
                </div>

                <div className="pledge_detail_row">
                    <div>
                        Reward <br /><br />Bonus
                    </div>
                    <div>
                        No reward, I just want to support the project
                    </div>
                    <div className="pledge_amount">
                        $10
                    </div>
                </div>
                
                <div className='underline'></div>

                <div className="pledge_detail_row">
                    <div>
                    Total amount
                    </div>
                   
                    <div className="pledge_amount">
                        $10
                    </div>
                </div>

            </div>
            
                
            <div className="right_bar">
                <div className="card_common_input_div" id='card_nimber_div'>
                    <label>Card Number</label><br />
                    <input type="text" name="" id="" placeholder='card number' />
                </div>    

                    
                <div className="card_common_input_div">
                    <label>Card holder name</label><br />
                    <input type="text" name="" id="" placeholder='card holder name' />
                </div>    

                    
                <div id='cvv_expire'>
                    <div className="expiration_input_div">
                        <label>Expiration</label><br />
                        <input type="text" name="" id="" placeholder='MM/YY' />
                    </div>  
                    <div className="CVV_input_div">
                        <label>Card Number</label><br />
                        <input type="text" name="" id="" placeholder='card number' />
                    </div>  
                </div>    
                  

                    
                <div className="card_common_input_div">
                    <label>ZIP/Postal code</label><br />
                    <input type="text" name="" id="" placeholder='ZIP/Postal code' />
                </div>    

                <div className="remember_card_div">
                    <input type="checkbox" name="" id="" />
                    <span>Remember this card for future pledges</span>
                </div>

                <div className="reward_div">
                    <span>Rewards aren’t guaranteed.</span>
                </div>

                <div className="card_note">
                    Backing means supporting a creative project,regardless of the outcome.
                </div>

                <div className="checkbox2_card_div">
                    <input type="checkbox" name="" id="" />
                    <span>I understand that rewards or reimbursments aren’t gauranteed by either 
                    Kickstarter ot the creator</span>
                </div>
                
                <div className="learn_more">
                    Learn more about accountability
                </div>

                    {/* <button className='pledge_btn'>Pledge</button> */}
                    <button className='pledge_btn'><Link to="/confirmation">Pledge</Link></button>

                <div className="submiting_div">
                    By submitting your pledge, you agree to Kickstarter’s Terms of Use, and Privacy Policy and for out payment Processor,Stripe, to charge your payment method.
                </div>
                    
            </div>
        </div>


        </>
    )
}

export default CardDetailPage
