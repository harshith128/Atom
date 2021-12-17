import Nav from "../FirstPage/NavBar2/Nav";
import { FooterTable } from "./FooterTable";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import bottumleftimage from "../../assets/bottomleftimage.png";

export const Footer =  () => {
    return (
        <section className="footerSection" style={{backgroundImage: `url(${bottumleftimage} )`}}>
                <Nav />
                <FooterTable />
                <div className="social">
                    <div className="copy">
                        <img src="images/Vector.png" alt="Vector"/>
                    </div>
                    <p className="copy-text">Kickstarter, PBC © 2021</p>
                    <div className="connect">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                    <div className="dropdown-footer">
                        <select>
                            <option>English</option>
                        </select>
                        <select>
                            <option>$ US Dollar (USD)</option>
                        </select>
                    </div>
                </div>
                <div className="dummy"></div>
                <div className="terms">
                    <p>Trust & Safety</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Accessibility Statement</p>
                    <p>CA Notice of Consent</p>
                </div>
        </section>
    )
}