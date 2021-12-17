import { useState } from "react";
import "./newsletter.css";

export const Newsletter = () => {
    const [newsletterEmail, setnewsletterEmail] = useState("");

    const handleNewsletter = (e) => {
        setnewsletterEmail(e.target.value);
    }

    const handleSubscription = () => {
        if(newsletterEmail === ""){
            return
        }
        // console.log(newsletterEmail);
        setnewsletterEmail("");
    }

    return (
        <section className="news-section">
            <div className="news-box">
                <h2 className="news-head1">See the future in your inbox.</h2>
                <h4 className="news-head2">Sign up to receive Invent, Kickstarter’s Design and Tech newsletter</h4>
                <div className="newsletter-cont">
                    <input value={newsletterEmail} onChange={handleNewsletter} placeholder="Enter email address" className="newsletter-input" type="email" />
                    <button onClick={handleSubscription} className="newsletter-btn">Subscribe</button>
                </div>
            </div>
        </section>
    )
}