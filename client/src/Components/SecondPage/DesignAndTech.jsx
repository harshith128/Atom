import { blue } from "@mui/material/colors";
import Carousel from "../FirstPage/Carousel/Carousel_func";
import CreatorsCorner from "../FirstPage/CreatorsCorner/CreatorsCorner";
import FeaturedProject from "../FirstPage/FeaturedProject/FeaturedProject";
import LogoNav from "../FirstPage/LogoNavbar/LogoNav";
import MagicDivination from "../FirstPage/MagicDivination";
import MakingOf from "../FirstPage/MakingOf";
import Nav from "../FirstPage/NavBar2/Nav";
import Recommended from "../FirstPage/Recommended/Recommended";
import { Footer } from "../Footer/Footer";
import { Newsletter } from "../Newsletter/Newsletter";
import { DisplayProjects } from "../ProjectDisplay/DisplaySideScroll";
import { Link } from "react-router-dom";

import { Explore } from "./Explore";

export const DesignAndTech = () => {
	const design = ["Product Design", "Toys", "Graphic Design", "Architechture"];
	const tech = [
		"Apps",
		"Gadgets",
		"Hardware",
		"Web",
		"Software",
		"3D Printing",
		"DIY Electronis",
		"Sound",
	];
	const styles = {
		textAlign: "left",
		marginLeft:"11%"
	}
	return (
		<div>
			<LogoNav />
			<Nav />
			<div style={{ marginTop: "5%", marginBottom: "0%" }}>
				<h1 style={styles}>Design & Tech</h1>
				<p style={styles}>
					From fine design to innovative tech, discover projects from creators
					working to build a more beautiful feature
				</p>
				
				<Link to="/exploremore"><span style={{ marginLeft: "11%", color: "blue" }}>Explore Design</span></Link>
				<span style={{marginLeft:"3%",color:"blue",marginBottom:"0px"}}>Explore Technology</span>
			</div>
			<div style={{ display: "flex", marginTop: "0%" }}>
				<FeaturedProject></FeaturedProject>
				<Recommended></Recommended>
			</div>

			<Newsletter />
			<Explore category="Design" subCategory={design} />
			<Carousel title={"FRESH FAVORITE"}></Carousel>
			<Carousel title={"TAKING OFF"}></Carousel>
			<Carousel title={"HOME STRETCH"}></Carousel>
			<MagicDivination
				sub="FOR CREATORS"
				heading="Kickstarter Creator Tips: Design & Technology"
				url="https://s3-alpha-sig.figma.com/img/3d6a/8c6b/a82a4a72a84095d0faa102edc01a2b9f?Expires=1640563200&Signature=BnqS3GLB1ejjUMRgjw67mKdVzy5j-pvVzwZJv1OcqgA2bfSvsC3WWqR0SuVkKsBocWEmmyePFSmoYG~04nr0cgqsO67mE1K7hRIh0GNjk9PZT41LHTI1bF73IY4AfR84sooVXTdpvFFVXrXzfvKml56nUON4U3aqnVIOTaelXQaUnHMFMsBgHdX1Tx7soizfJyegf3x~uzclsXpx7KUwowx7CK0e~7EfiAclEBkCZOQBku4FMLJFGCIKfExLas9~4kbWr5gp~WzaMe5r6~3xOXDPswSLqg~~DuDp4HrnHJtcWkZpA6d6AcUdmlhIbbL~OubP18mr49DcvxSs91jtOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				content="Launch your Design or Technology project on Kickstarter with these resources to guide you through planning, promoting, launching and fulfilling your campaign."
			/>
			<Explore category="Technology" subCategory={tech} />
			<MakingOf head={"MORE TO EXPLORE"}></MakingOf>
			<CreatorsCorner></CreatorsCorner>
			<Footer />
		</div>
	);
};
