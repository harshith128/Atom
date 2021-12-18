import "./CreatorsCorner.css"

const CreatorsCorner = () => {
    return (
        <>
        <div className="main_cont">
            
            <div className="corner_head">CREATORS' CORNER</div>

            <div className="boxes_cont">
                <div className="creatord_boxes">
                    <div className="creator_img_div">
                        <img src="images/creator1.jpg" alt="" className="creator_img" />
                    </div>
                    <div className="creator_content">
                        <span className="box_head">Kickstarter Creator Resources</span>
                        <p className="box_para">Our definitive roundup of everything from planning shipping to communicating with backers.
                        </p>
                        <span className="read_more_creator">Read More</span>
                    </div>
                </div>
               
                <div className="creatord_boxes">
                    <div className="creator_img_div">
                        <img src="images/creator2.jpg" alt="" className="creator_img" />
                    </div>
                    <div className="creator_content">
                        <span className="box_head">How to tell the story of your creative work</span>
                        <p className="box_para">Tips for uncovering the best story you can tell to press, funders, followers, and everybody else.
                        </p>
                        <span className="read_more_creator">Read More</span>
                    </div>
                </div>
               
                <div className="creatord_boxes">
                    <div className="creator_img_div">
                        <img src="images/creator3.jpg" alt="" className="creator_img" />
                    </div>
                    <div className="creator_content">
                        <span className="box_head">How to talk about your project clearly</span>
                        <p className="box_para">Our advice for crafting a project page that’s honest, open, and transparent in both text and visuals.
                        </p>
                        <span className="read_more_creator">Read More</span>
                    </div>
                </div>
               
                <div className="creatord_boxes">
                    <div className="creator_img_div">
                        <img src="images/creator4.jpg" alt="" className="creator_img" />
                    </div>
                    <div className="creator_content">
                        <span className="box_head">Fulfillment from A to Z</span>
                        <p className="box_para">A list of services that can help you with prototyping, manufacturing, packaging, shipping, and more.
                        </p>
                        <span className="read_more_creator">Read More</span>
                    </div>
                </div>
               
            </div>
        </div>

        <div className="next_cont">
            <div className="inside_next_cont">
                <div className="left_div">
                    <img src="images/spiral.jpg" alt="" className="spiral_img" />
                    <div className="spiral_head">The Creative
                    Independent</div>
                    <p className="yellow_para">A growing resource of emotional
                    and practical guidance for 
                    creative people</p>
                    <span className="visit">Visit the creative independent</span>
                </div>
                
                <div className="right_div">
                    <div className="profile_div move_box" >
                        <div className="profile_box">
                            <img src="images/profile1.jpg" alt="" className="profile_img" />
                            <span className="profile_head">Desiree Akhavan</span>
                            <span className="profile_info">on workink on both sides of the camera</span>
                        </div>
                        
                        <div className="profile_box">
                            <img src="images/profile2.jpg" alt="" className="profile_img" />
                            <span className="profile_head">Alicia Bognanno</span>
                            <span className="profile_info">on managing your creative time.</span>
                        </div>
                        
                        <div className="profile_box">
                            <img src="images/profile3.jpg" alt="" className="profile_img" />
                            <span className="profile_head">Naama Tsabar</span>
                            <span className="profile_info">on taking control of your process.</span>
                        </div>

                            
                    </div>
                    <div className="profile_div">
                        <div className="profile_box">
                            <img src="images/profile4.jpg" alt="" className="profile_img" />
                            <span className="profile_head">Björk</span>
                            <span className="profile_info">on nature and technology.</span>
                        </div>
                        
                        <div className="profile_box">
                            <img src="images/profile5.jpg" alt="" className="profile_img" />
                            <span className="profile_head">John Cale</span>
                            <span className="profile_info">on revisiting your work.</span>
                        </div>
                        
                        <div className="profile_box">
                            <img src="images/profile6.jpg" alt="" className="profile_img" />
                            <span className="profile_head">Stevie Nicks</span>
                            <span className="profile_info">on the importance of being a </span>
                        </div>

                            
                    </div>
                    
                </div>
            </div>
        </div>

        </>
    )
}

export default CreatorsCorner
