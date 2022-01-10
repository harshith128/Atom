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
import "./explore.css"

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
	return (
		<div>
			<LogoNav />
			<Nav />
			<div style={{ marginTop: "5%", marginBottom: "0%" }}>
				<h1 className="sec-des-fam">Design & Tech</h1>
				<p className="sec-des-para-fam">
					From fine design to innovative tech, discover projects from creators
					working to build a more beautiful feature
				</p>
				
				<Link to="/exploremore"><span className="sec-des-ex">Explore Design</span></Link>
				<span className="sec-des-ex2">Explore Technology</span>
			</div>
			<div style={{ display: "flex", marginTop: "0%",marginLeft:"0%" }}>
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
				url="https://user-images.githubusercontent.com/61180475/148792074-6b37bae7-c18a-4d36-9809-81342eb63208.png"
				content="Launch your Design or Technology project on Kickstarter with these resources to guide you through planning, promoting, launching and fulfilling your campaign."
			/>
			<Explore category="Technology" subCategory={tech} />
			<MakingOf head={"MORE TO EXPLORE"}></MakingOf>
			<CreatorsCorner></CreatorsCorner>
			<Footer />
		</div>
	);
};
