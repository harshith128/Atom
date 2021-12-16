import './ConfirmationPage.css';

const ConfirmationPage = () => {
    return (
        <div className="Container">
          <div className="pinc_bar">
              <span></span>
              <span id='span_1'>check your inbox so you can quickly complete your verification</span>
              <div className="resend_email_div">
                  <img src="images/mail.svg" alt="" />
                  <span>Resend email</span>
              </div>
          </div>  

          <div className="logo_bar">
              <div className="logo_content_1">
                  <span>Discover</span>
                  <span>Start a project</span>
              </div>
              <div className="logo_content_2">
                  <img src="images/Logo.png" alt="" className="logo_img" />
              </div>
              <div className="logo_content_3">
                  <button className="search_btn">
                      <span>Search</span>
                      <img src="images/search.svg" alt="" className="search_icon" />
                  </button>
                  
                <img className="user_profile_pic_img" src="images/profile.png" alt="" />
                  
              </div>
          </div>
        </div>
    )
}

export default ConfirmationPage
