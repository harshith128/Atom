import { Footer } from "../Footer/Footer";
import ProductContent from "./ProductContent";
import ProductNav from "./ProductNav";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import LogoNav from "../FirstPage/LogoNavbar/LogoNav";

export const ProductPage = () => {
    return (
        <div>

            <LogoNav />
            <div className="top-content">
                <div className="heading">
                    <div className="title1">ORCA Pot-One pot fits all</div>
                    <div className="subtitle">
                        A multi-purpose cast iron cookware set designed especially for your
                        convinience
                    </div>
                </div>
                <div className="image-details">
                    <div className="left-image">
                        <img src="images/Video.jpg" alt="" className="product-image" />
                        <div className="location">
                            <img src="images/compass.jpg" alt="" className="space" />{" "}
                            <span className="spaced">Product Design</span>
                            <span className="dot"></span>
                            <img src="images/compass.jpg" alt="" className="space" />{" "}
                            <span className="spaced">Long Beach, CA</span>
                        </div>
                    </div>
                    <div className="product-details">
                        <div className="bar"></div>
                        <div>
                            <div className="bar-below">
                                <div className="price">US$ 54,338</div>
                                <div className="pledge">pledged of US$ 10,000 goals</div>
                            </div>
                            <div className="bar-below">
                                <div className="price ash">532</div>
                                <div className="pledge">backers</div>
                            </div>
                            <div className="bar-below">
                                <div className="price ash">26</div>
                                <div className="pledge">days to go</div>
                            </div>
                            <div className="back-btn">
                            <Link to="/reward"><button className="project-btn">Back this project</button></Link>
                            </div>
                            <div className="below-btn">
                                <div>
                                    <div className="border-box">
                                        <img className="image2" src="images/save.jpg" alt="" />
                                        <div className="remind">Remind me</div>
                                    </div>
                                    <div className="border-box1 border-box">
                                        <img src="images/fb.jpg" alt="" />
                                        <img src="images/twit.jpg" alt="" />
                                        <img src="images/msg.jpg" alt="" />
                                        <img src="images/code.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap"></div>

                <div className="connectors">
                    <div className="connector">
                        <div>
                            <img src="images/map.jpg" alt="" className="connector-img" />
                            <span className="text">
                                Kickstarters connects creators with backers to fund projects
                            </span>
                        </div>
                        <div>
                            <img src="images/map.jpg" alt="" className="connector-img" />
                            <span className="text">
                                Kickstarters connects creators with backers to fund projects
                            </span>
                        </div>
                        <div>
                            <img src="images/mike.jpg" alt="" className="connector-img" />
                            <span className="text">
                                Kickstarters connects creators with backers to fund projects
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <ProductNav />

            <ProductContent />

            <Footer />
        </div>
    );
};
