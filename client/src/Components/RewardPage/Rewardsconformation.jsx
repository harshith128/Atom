import "./Rewards.css";
import backimg from "./backgroundblack.jpg";
import { Link } from "react-router-dom";

export const Rewardconformation = () => {
    const { amount } = JSON.parse(localStorage.getItem("reward"));
    return  (
        <div className="reward-confirm">
            <Link to="/" className="logodiv">
                <img src="images/Logo.png" className="imglogo" alt="" />
            </Link>
            
            <div className="head" >
                <div className="titles">ORCA Pot-One pot fits all</div>
                <div className="subtit">by Everstt</div>
            </div>
            <div className="subheading">
                <div className="steps-confirm">
                    <h3 className="reward">Rewards </h3>
                    <img src="images/fwd.svg" alt="" className="fwd-image" />
                    <h3 className="confirm">CONFIRM</h3>
                </div>
                <div className="confirm-apge-section">
                    <div className="reward-section-confirm">
                    <div className="edit-your">
                        <div className="your">Select Your Reward</div>
                        <Link to="/reward"><div className="edit">Edit</div></Link>
                    </div>
                    <div className="boxshadow">
                        <div>
                            <div className="boxreward">Reward <span className="early">Early Bird ORCA Pot Premium set</span></div>
                            <div className="boxreward bonus">Bonus</div>
                            <div className="rsreward">${ amount }</div>
                            <hr  className="hr"/>
                            <div className="boxreward bonus">New Total</div>
                            <div className="rsreward green">${ amount }</div>
                            <div className="end boxreward bonus">Previous total</div>
                            <div className="rsreward">${ amount }</div>
                        </div>
                    </div>
                    <div>
                        <Link to="/signup"><div className="btnclick">Confirm Charges</div></Link>
                        <Link to="/"><div className="cancel">Cancel</div></Link>
                    </div>
                    </div>

                    <div className="reward-section3">
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