import "./Rewards.css"
import backimg from "./backgroundblack.jpg";
import { Link } from "react-router-dom";

export const Rewardconformation = () => {
    return  (
        <div>
            <div>
            <Link to="/" className="logodiv">
                <img src="images/Logo.png" className="imglogo" alt="" />
            </Link>
            
            <div className="head" >
                <div className="titles">ORCA Pot-One pot fits all</div>
                <div className="subtit">by Everstt</div>
            </div>
            <div className="subheading">
                <div className="steps">
                <div className="reward">Rewards
                <img src="images/forward.jpg" alt="" className="forwardarrow" />
                <span className="confirm">CONFIRM</span>
                </div>
                
                </div>
                <div className="reward-section">
                    <div className="your">Select Your Reward</div>
                    <div className="edit">Edit</div>
                    <div className="boxshadow">
                        <div>
                            <div className="boxreward">Reward <span className="early">Early Bird ORCA Pot Premium set</span></div>
                            <div className="boxreward bonus">Bonus</div>
                            <div className="rsreward">$1</div>
                            <hr  className="hr"/>
                            <div className="boxreward bonus">New Total</div>
                            <div className="rsreward green">$1</div>
                            <div className="end boxreward bonus">Previous total</div>
                            <div className="rsreward">$1</div>
                        </div>
                    </div>
                    <div>
                        <div className="btnclick"><Link to="/signup">Confirm Charges</Link></div>
                        <div className="cancel">Cancel</div>
                    </div>
                </div>

                <div className="reward-section2">
                    {/* <div>Hello world.</div>
                    <div>Hello world.</div> */}
                    <div className="backimage" style={{background: `url(${backimg})`}}>
                        <img src="images/cart.png" className="cartimage" alt="" />
                        <span className="with">Rewards with guarenteed</span>
                    </div>
                    <div className="textbelow">Your pledge will support an ambitious creative project that has yet to be developed. There’s a risk that, despite a creator’s best efforts, your reward will not be fulfilled, and we urge you to consider this risk prior to pledging. Kickstarter is not responsible for project claims or reward fulfillment.</div>

                    <div className="textbelow">Learn more about accountability</div>
                    <div className="frequently">FREQUENTLY ASKED QUESTIONS</div>
                    <div className="bulletarrows">
                        <img src="images/bulletarrows.jpg" alt="" />
                        <span className="queries">How do I pledge?</span>
                    </div>
                    <div className="bulletarrows">
                        <img src="images/bulletarrows.jpg" alt="" />
                        <span className="queries">When is my card changed?</span>
                    </div>
                    <div className="bulletarrows">
                        <img src="images/bulletarrows.jpg" alt="" />
                        <span className="queries">So I'm only charged if funding succeeds?</span>
                    </div>
                    <div className="bulletarrows">
                        <img src="images/bulletarrows.jpg" alt="" />
                        <span className="queries">What can others see about my pledge?</span>
                    </div>
                    <div className="bulletarrows">
                        <img src="images/bulletarrows.jpg" alt="" />
                        <span className="queries">What if I went to change my pledge?</span>
                    </div>
                    <div className="bulletarrows">
                        <img src="images/bulletarrows.jpg" alt="" />
                        <span className="queries">If this project is funded, how do I get my reward?</span>
                    </div>
                </div>


            </div>
            </div>
        </div>
    )
}