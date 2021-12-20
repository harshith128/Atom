import "./Rewards.css"
import { Link } from "react-router-dom"
import backimg from "./backgroundblack.jpg"
import { useState } from "react"
import { Help } from "../Help/Help"
export const Rewards = () => {
    const [select, setSelect] = useState(false);
    const [amount, setAmount] = useState(1);

    const handleReward = () => {
        setAmount(amount || 1);
        localStorage.setItem("reward", JSON.stringify({amount}));
    }

    const handleChandeReward = (e) => {
        if(isNaN(e.target.value)){
            alert("Only numbers are allowed");
            return
        }
        setAmount(e.target.value);
        return
    }


    return (
        <div className="reward-page">
            <Link to="/" className="logodiv">
                <img src="images/Logo.png" className="imglogo" alt="" />
            </Link>
            
            <div className="head" >
                <div className="titles">ORCA Pot-One pot fits all</div>
                <div className="subtit">by Everstt</div>
            </div>
            <div className="steps">
                    <h3 className="reward">REWARDS</h3>
                    <img className="fwd-image" src="images/fwd.svg" alt="img" />
                    <h3 className="addons"> ADD-ONS </h3>
                    <img className="fwd-image"  src="images/fwd.svg" alt="img" />
                    <h3 className="addons"> PAYMENT </h3>
            </div>
            <div className="reward-container">
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
            <div className="subheading">
                <div className="reward-section">
                    <div className="selection">Select your reward</div>
                    <div className="reward">Select an option below</div>
                    <div className="reward-selection"></div>
                    <div>
                        <div className={ select ? "reward-input money5" : "reward-input"}>
                            <div className={ select ? "circle-selected" : "circle"} onClick={ ()=> setSelect(!select)}></div>
                            <div className="pledgeReward">Pledge without a reward</div>
                            {
                                select ? 
                                <div className="left-padd left-padd1">
                                    <div className="rs1">Pledge amount</div>
                                    <div className="rsprice rsprice1"><p className="dollor-text">$</p></div>
                                    <input onChange={handleChandeReward} type="number" value={amount} className="inputbar inputbarselect" placeholder="Enter Amount" />
                                    <Link style={{textDecoration: "none"}} to="/rewardconformationpage">
                                        <span onClick={handleReward} className="conti">Continue</span>
                                    </Link>
                                </div> : <></>
                            }
                            
                        </div>
                    </div>
                    <div>
                        <div className="reward-input money">
                            <div className="cir">
                            <div className="circle"></div>
                            </div>
                            <div className="pledgeReward">Pledge $89</div>
                            <div className="left-padd">
                                <div className="rs">Orca Pot Essential Set</div>
                                <div>
                                    <div className="retail">*Save 21$ (110$ Retail)</div>
                                    <div className="retail">*Shipping Costs will be charged extra after the Camapaign</div>
                                    <div className="space-gap"></div>
                                    <div className="includes">INCLUDES
                                    <ul className="list">
                                        <li>ORCA POT</li>
                                        <li>Grill Pan</li>
                                        <li>Glass Lid</li>
                                    </ul>
                                    </div>
                                    <div className="boxes">
                                    <div className="boxadd">Add-ons</div>
                                    <div className="boxadd add2">10 Backers</div>
                                    </div>
                                </div>
                            
                                
                            </div>
                            <div className="est">
                                <div className="del">ESTIMATED DELIVERY</div>
                                <div className="date">MAY 2022</div>
                                <div className="ship del">SHIPS TO</div>
                                <div className="date">Only certain countries</div>
                            </div>

                            
                        </div>

                        <div className="reward-input money1">
                            <div className="cir">
                            <div className="circle"></div>
                            </div>
                            <div className="pledgeReward">Pledge $99</div>
                            <div className="left-padd">
                                <div className="rs">Early Bird ORCA POT Premium set</div>
                                <div>
                                    <div className="retail">*Save 31$ (130$ Retail)</div>
                                    <div className="retail">*Shipping Costs will be charged extra after the Camapaign</div>
                                    <div className="space-gap"></div>
                                    <div className="includes">INCLUDES
                                    <ul className="list">
                                        <li>ORCA POT</li>
                                        <li>Grill Pan</li>
                                        <li>Glass Lid</li>
                                        <li>Frying Basket</li>
                                        <li>Steaming Plate</li>
                                    </ul>
                                    </div>
                                    <div className="boxes">
                                        <div className="boxadd">Add-ons</div>
                                        <div className="boxadd lim">Limited (4 left of 440)</div>
                                        <div className="boxadd add2">436 Backers</div>
                                    </div>
                                </div>
                            
                                
                            </div>
                            <div className="est">
                                <div className="del">ESTIMATED DELIVERY</div>
                                <div className="date">MAY 2022</div>
                                <div className="ship del">SHIPS TO</div>
                                <div className="date">Only certain countries</div>
                            </div>

                            
                        </div>

                        <div className="reward-input money3">
                            <div className="cir">
                            <div className="circle"></div>
                            </div>
                            <div className="pledgeReward">Pledge $115</div>
                            <div className="left-padd">
                                <div className="rs">ORCA POT Premium set</div>
                                <div>
                                    <div className="retail">*Save 15$ (130$ Retail)</div>
                                    <div className="retail">*Shipping Costs will be charged extra after the Camapaign</div>
                                    <div className="space-gap"></div>
                                    <div className="includes">INCLUDES
                                    <ul className="list">
                                        <li>ORCA POT</li>
                                        <li>Grill Pan</li>
                                        <li>Glass Lid</li>
                                        <li>Frying Basket</li>
                                        <li>Steaming Plate</li>
                                    </ul>
                                    </div>
                                    <div className="boxes">
                                        <div className="boxadd">Add-ons</div>
                                        <div className="boxadd lim">Limited (30 left of 50)</div>
                                        <div className="boxadd add2">20 Backers</div>
                                    </div>
                                </div>
                            
                                
                            </div>
                            <div className="est">
                                <div className="del">ESTIMATED DELIVERY</div>
                                <div className="date">MAY 2022</div>
                                <div className="ship del">SHIPS TO</div>
                                <div className="date">Only certain countries</div>
                            </div>

                            
                        </div>

                        <div className="reward-input money">
                            <div className="cir">
                            <div className="circle"></div>
                            </div>
                            <div className="pledgeReward">Pledge $75</div>
                            <div className="left-padd">
                                <div className="rs">Early Bird ORCA POT Essential Set</div>
                                <div>
                                    <div className="retail">*Save 35$ (110$ Retail)</div>
                                    <div className="retail">*Shipping Costs will be charged extra after the Camapaign</div>
                                    <div className="space-gap"></div>
                                    <div className="includes">INCLUDES
                                    <ul className="list">
                                        <li>ORCA POT</li>
                                        <li>Grill Pan</li>
                                        <li>Glass Lid</li>
                                    </ul>
                                    </div>
                                    <div className="boxes">
                                        <div className="boxadd add2">Reward no longer available</div>
                                    </div>
                                </div>
                            
                                
                            </div>
                            <div className="est">
                                <div className="del">ESTIMATED DELIVERY</div>
                                <div className="date">MAY 2022</div>
                                <div className="ship del">SHIPS TO</div>
                                <div className="date">Only certain countries</div>
                            </div>

                            
                        </div>

                        <div className="reward-input money4">
                            <div className="cir">
                            <div className="circle"></div>
                            </div>
                            <div className="pledgeReward">Pledge $119</div>
                            <div className="left-padd">
                                <div className="rs">Orca Pot Ultimate Set</div>
                                <div>
                                    <div className="retail">*Save 26$ (145$ Retail)</div>
                                    <div className="retail">*Shipping Costs will be charged extra after the Camapaign</div>
                                    <div className="space-gap"></div>
                                    <div className="includes">INCLUDES
                                    <ul className="list">
                                        <li>ORCA POT</li>
                                        <li>Grill Pan</li>
                                        <li>Glass Lid</li>
                                        <li>Frying Basket</li>
                                        <li>Steaming Plate</li>
                                        <li>Camping Stand</li>
                                    </ul>
                                    </div>
                                    <div className="boxes">
                                        <div className="boxadd add2">Rewards no longer available</div>
                                    </div>
                                </div>
                            
                                
                            </div>
                            <div className="est">
                                <div className="del">ESTIMATED DELIVERY</div>
                                <div className="date">MAY 2022</div>
                                <div className="ship del">SHIPS TO</div>
                                <div className="date">Only certain countries</div>
                            </div>

                            
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            <Help />
        </div>
    )
}