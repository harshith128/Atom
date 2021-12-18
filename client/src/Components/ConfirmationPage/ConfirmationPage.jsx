import LogoNav from '../FirstPage/LogoNavbar/LogoNav';
import { Footer } from '../Footer/Footer';
import { DisplayProjects } from '../ProjectDisplay/DisplaySideScroll';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
    return (
        <>
        <div className="Top_Container">
          <div className="pinc_bar">
              <span></span>
              <span id='span_1'>check your inbox so you can quickly complete your verification</span>
              <div className="resend_email_div">
                  <img src="images/mail.svg" alt="" />
                  <span>Resend email</span>
              </div>
          </div>  
s
            <LogoNav />
    
          <div className="content_div">
              <div className="left_content">
                  <img src="images/Evrstt Logo.png" alt="" className="everest_logo_img" />
                  <div className="thanks_div">
                      <span className='heading_thanks_span'>Thank You,[Example user]</span>
                      <span className="content_thank_span">Your $1.00 pledge brings this project one step closer to becoming a reality.If the project reaches its funding goal, Your card will be charged on December 26,2021. Check your email for more details.</span>
                      
                      <span className="edit_pledge_span">Edit your pledge</span>
                  </div>
              </div>
              
              <div className="right_content">
                <div className="right_content_inside">
                  <div className="right_content_inside_1">Shout out your support</div>
                  <div className="right_content_inside_2">
                    use the hashtag<b>#backeditbacause</b> to let your friemds and followers know why
                    you chose this project 
                  </div>
                  <div className="right_content_inside_3">
                      <span className="confirm_pledge_ammount_span">$0</span>
                      <span className="confirm_pledge_ammount_goal_span">$10,000 goal</span>
                  </div>
                  <div className="green_line"></div>
                  <div className="right_content_inside_5">
                      <span>$54,359</span>
                      <span id='test_span'>532 people+You</span>
                  </div>
                  <div className="right_content_inside_6">
                      <div className="T_FB_btn">
                      <button className="twitter_btn"><img src="images/twitt.svg" alt="" className="icon_common_class" /> Tweet</button>
                      <button className="fb_share_btn"><img src="images/fb_icon.svg" alt="" className="icon_common_class" />Share</button>
                      </div>
                      
                      <button className="copy_link_btn"><img src="images/copy_icon.svg" alt="" className="icon_common_class" />copy</button>
                  </div>
                </div>  
              </div>
          </div>
        </div>
        
        
        <div className="project_content">
              {/* <h1>space for fetching the data from backend</h1> */}
              <div className="more_project_div">
                <div className="head_more_">More projects are coming to life-be part of them</div>
                <span className="more_project_span">Here are a few recommendations just for you</span>
              </div>
              <DisplayProjects />
        </div>
        <div className='advertising_poster'>
            <img className='advertising_poster' src="images/advertising1.jpg" alt="advertising poster" />
        </div>
        
        <div className="below_poster_div">
            <div>See the future in your inbox.</div>
            <div>Sign up to receive Invent, Kickstarter’s Design and Tech newsletter</div>
            <button className="subscribe_btn">Subscribe</button>
        </div>

        <Footer />
        </>
    )
}

export default ConfirmationPage
