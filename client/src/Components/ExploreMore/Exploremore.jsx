
import { useEffect, useState } from "react";
import axios from "axios";
import "./Exploremore.css";
import { Link } from "react-router-dom";
import LogoNav from "../FirstPage/LogoNavbar/LogoNav";
import { Footer } from "../Footer/Footer";

export const Exploremore = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [displaydata, setDisplaydata] = useState([]);


    const getData = async () => {
        const res = await axios(
            "http://localhost:2357/products"
        );
        console.log(res.data.product);
        setDisplaydata(res.data.product);
    };

    useEffect(() => {
        getData()
    }, []);


    return (
        <div>

            <LogoNav />


            <div className="containter">
                <div className="exploreSection">
                    <div className="text">Show me</div>
                    <div className="dropdown">
                        <button className="btn" onClick={() => { setShow1(!show1); setShow2(false); setShow3(false) }}>
                            Design <img src="images/Vector.jpg" alt="" className="arrow" />
                        </button>
                    </div>
                    <div className="text">Projects on</div>
                    <div className="dropdown">
                        <button className="btn" onClick={() => { setShow2(!show2); setShow3(false); setShow1(false) }}>
                            Earth <img src="images/Vector.jpg" alt="" className="arrow" />
                        </button>
                    </div>
                    <div className="text">Sorted by</div>
                    <div className="dropdown">
                        <button className="btn" onClick={() => { setShow3(!show3); setShow2(false); setShow1(false) }}>
                            Magic <img src="images/Vector.jpg" alt="" className="arrow" />
                        </button>
                    </div>
                </div>
                <div className="filters">More Filters</div>
                
                <div className="extra">
                    <div>
                {show1 &&
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
                </div>

            </div>
                    
                </div>



            </div>

            <div className="cat-cont">
                {
                    displaydata.map((ele, i) => {
                        return (

                            <div key={i} className="display-data">
                                <img className="image-cover" src={ele.coverImage} alt="image" />
                                <div className="project_info_box">
                                    <h3 className="productName">{ele.productName }</h3>
                                    <p className="description">{ele.description}</p>
                                    <p className="creator">By {ele.creator}</p>
                                </div>

                                <div className="">
                                    <div
                                        className="green_bar"
                                        style={{ width: `${Math.floor(Math.random() * 100) + 1}%` }}
                                    ></div>
                                </div>
                                <div className="measures">
                                    <span>${Math.floor(Math.random() * 100) + 1}</span>
                                    <span>{Math.floor(Math.random() * 100) + 1}% funded</span>
                                    <span>{Math.floor(Math.random() * 50) + 10} days to go</span>
                                </div>

                                <p className="loc_para"><span>{ele.subcategory[0]}</span><img src="images/locationIcon.svg" alt="" className="loc_img" /><span>{ele.location}</span></p>
                            </div>
                        )
                    })
                }
            </div>

            <Footer />
        </div>
    )
} 