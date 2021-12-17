import "./ProductPage.css"

// const image1 = require('../images/Video.jpg')
// const image2 = require('../images/save.jpg')
// const image3 = require('../images/fb.jpg')
// const image4 = require('../images/twit.jpg')
// const image5 = require('../images/msg.jpg')
// const image6 = require('../images/code.jpg')
// const image7 = require('../images/composs.jpg')
// const image8 = require('../images/map.jpg')
// const image9 = require('../images/mike.jpg')

export const ProductPage = () => {
    return (
        <div>
            <div>
            <div className="heading">
                <div className="title1">ORCA Pot-One pot fits all</div>
                <div className="subtitle">A multi-purpose cast iron cookware set designed especially for your convinience</div>
            </div>
            <div className="image-details">
                <div className="left-image">
                    <img src="images/Video.jpg" alt="" className="product-image" />
                    <div className="location">
                        <img src="images/compass.jpg" alt="" className="space" /> <span className="spaced">Product Design</span>
                        <span className="dot"></span>
                        <img src="images/compass.jpg" alt="" className="space" /> <span className="spaced">Long Beach, CA</span>
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
                            <button className="project-btn">Back this Project</button>
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
                    <span className="text">Kickstarters connects creators with backers to fund projects</span>
                    </div>
                    <div>
                    <img src="images/map.jpg" alt="" className="connector-img" />
                    <span className="text">Kickstarters connects creators with backers to fund projects</span>
                    </div>
                    <div>
                    <img src="images/mike.jpg" alt="" className="connector-img" />
                    <span className="text">Kickstarters connects creators with backers to fund projects</span>
                    </div>
                </div>
            </div>
            <div className="bar-menu">
                <div>
                    <div className="container">
                        <div className="begin">Compaign</div>
                        <div className="begin">FAQ</div>
                        <div className="begin">Updates</div>
                        <div className="begin">Comments</div>
                        <div className="begin">Community</div>
                        <div className="mid"></div>
                        <div className="end back">Back this project</div>
                        <div className="end">Remind me</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}