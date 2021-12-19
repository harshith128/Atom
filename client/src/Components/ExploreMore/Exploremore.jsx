
import { useState } from "react";
import "./Exploremore.css"
import { Link } from "react-router-dom";

export const Exploremore = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    return (
        <div>
        <div className="containter">
            <div className="exploreSection">
                <div className="text">Show me</div>
                <div className="dropdown">
                    <button className="btn" onClick={()=> {setShow1(!show1); setShow2(false); setShow3(false)}}>
                        Design <img src="images/Vector.jpg" alt="" className="arrow" />
                    </button>
                </div>
                <div className="text">Projects on</div>
                <div className="dropdown">
                    <button className="btn" onClick={()=> {setShow2(!show2); setShow3(false); setShow1(false) }}>
                        Earth <img src="images/Vector.jpg" alt="" className="arrow" />
                    </button>
                </div>
                <div className="text">Sorted by</div>
                <div className="dropdown">
                    <button className="btn" onClick={()=> {setShow3(!show3); setShow2(false); setShow1(false) }}>
                        Magic <img src="images/Vector.jpg" alt="" className="arrow" />
                    </button>
                </div>
            </div>
            <div className="filters">More Filters</div>
            <div>
                {/* {show1 &&
                <div className="dropdown-1">
                    <div style={{display: "flex"}}>
                    <div>CATAGORIES</div>
                    </div>
                    <hr />
                    <div className="categiries">
                        <div>All Catogeries</div>
                        <div>Art</div>
                        <div>Comics</div>
                        <div>Crafts</div>
                        <div>Dance</div>
                        <div>Design</div>
                        <div>Fashion</div>
                        <div>Film & Video</div>
                    </div>
                </div>}
                {show2 &&
                <div className="dropmenu-2">
                    <div>
                        <input type="text" className="searchbar" placeholder="Search by city, state, country...." />
                        <div>BROADER LOCATIONS</div>
                        <hr />
                        <div className="categiries cat2">
                        <div>Earth</div>
                        <div>India</div>
                        <div>Hyderabad, India</div>
                        </div>
                    </div>
                </div>}
                <div>
                {show3 &&
                    <div className="dropmenu-3">
                    <div className="categiries cat3">
                        <div>Magic</div>
                        <div>Popularity</div>
                        <div>Newest</div>
                        <div>End Date</div>
                        <div>Most Funded</div>
                        <div>Most Backed</div>
                        <div>Near Me</div>
                    </div>
                    </div>}
                </div> */}

            </div>
        </div>
        <hr />
        <div className="maincontent">
            <div className="titleExplore">Explore <span className="noProjects">45627Projects</span></div>
            <div className="grid-container">
                <div className="grid-template">
                    <div className="border">
                    <div>
                        <img src="images/explore.jpg" alt="" className="grid-image" />
                    </div>
                    <div className="innerborder">
                    <div className="span title"><Link to="/productpage">Boxx | Bringing the Boxing Studio Home</Link></div>
                    <div className="span describe">Beautifillay designed punch bag and smart trackers. Take your at-home boxing workout to the next level.</div>
                    <div className="span describe author">by Boxx</div>
                    <div className="line"></div>
                    <div className="price">$159.978</div>
                    <div className="fund">1599% funded</div>
                    <div className="fund">20 days to go</div>
                    <div className="bottom"><span className="sm">Product Design</span> 
                        <img src="images/geo.jpg" className="geo" alt="" /><span className="loc">London, UK</span>
                    </div>
                    </div>
                    </div>
                </div>
                
                <div className="grid-template">
                    <div className="border">
                    <div>
                        <img src="images/explore.jpg" alt="" className="grid-image" />
                    </div>
                    <div className="innerborder">
                    <div className="span title">Boxx | Bringing the Boxing Studio Home</div>
                    <div className="span describe">Beautifillay designed punch bag and smart trackers. Take your at-home boxing workout to the next level.</div>
                    <div className="span describe author">by Boxx</div>
                    <div className="line"></div>
                    <div className="price">$159.978</div>
                    <div className="fund">1599% funded</div>
                    <div className="fund">20 days to go</div>
                    <div className="bottom"><span className="sm">Product Design</span> 
                        <img src="images/geo.jpg" className="geo" alt="" /><span className="loc">London, UK</span>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="grid-template">
                    <div className="border">
                    <div>
                        <img src="images/explore.jpg" alt="" className="grid-image" />
                    </div>
                    <div className="innerborder">
                    <div className="span title">Boxx | Bringing the Boxing Studio Home</div>
                    <div className="span describe">Beautifillay designed punch bag and smart trackers. Take your at-home boxing workout to the next level.</div>
                    <div className="span describe author">by Boxx</div>
                    <div className="line"></div>
                    <div className="price">$159.978</div>
                    <div className="fund">1599% funded</div>
                    <div className="fund">20 days to go</div>
                    <div className="bottom"><span className="sm">Product Design</span> 
                        <img src="images/geo.jpg" className="geo" alt="" /><span className="loc">London, UK</span>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="grid-template">
                    <div className="border">
                    <div>
                        <img src="images/explore.jpg" alt="" className="grid-image" />
                    </div>
                    <div className="innerborder">
                    <div className="span title">Boxx | Bringing the Boxing Studio Home</div>
                    <div className="span describe">Beautifillay designed punch bag and smart trackers. Take your at-home boxing workout to the next level.</div>
                    <div className="span describe author">by Boxx</div>
                    <div className="line"></div>
                    <div className="price">$159.978</div>
                    <div className="fund">1599% funded</div>
                    <div className="fund">20 days to go</div>
                    <div className="bottom"><span className="sm">Product Design</span> 
                        <img src="images/geo.jpg" className="geo" alt="" /><span className="loc">London, UK</span>
                    </div>
                    </div>
                    </div>
                </div>


            </div>
        </div>
        </div>
    )
} 