import React from "react";
import { Footer } from "../Footer/Footer";
import CreatorsCorner from "./CreatorsCorner/CreatorsCorner";
import FullCreator from "./CreatorSuccess/FullCreator";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import LogoNav from "./LogoNavbar/LogoNav";
import MagicDivination from "./MagicDivination";
import MakingOf from "./MakingOf";
import Nav from "./NavBar2/Nav";
import Recommended from "./Recommended/Recommended";
import Section3 from "./section3/Section3";
import "./firstPage.css";
import { Newsletter } from "../Newsletter/Newsletter";
import Carousel from "./Carousel/Carousel_func";

export default function FirstPage() {
	return (
		<div id="home-section-class">
			<LogoNav></LogoNav>
			<Nav></Nav>
			<Section3></Section3>
			<div className="home-feat">
				<FeaturedProject></FeaturedProject>
				<Recommended></Recommended>
			</div>
			<MagicDivination
				heading="Magic and Divination"
				url="https://user-images.githubusercontent.com/61180475/148779872-903f7245-fe11-4388-9e7f-541b91a47fb5.png"
				content="From terrific tarot decks and wizarding wands to arcane accessories,
						eldritch electronics, sorcerous stationery, and so much more, you
						can now find all the most spellbinding projects here in one place."
			/>
			<Carousel title={"FRESH FAVORITE"}></Carousel>
			<Carousel title={"TAKING OFF"}></Carousel>
			<Carousel title={"HOME STRETCH"}></Carousel>
			<Newsletter />
			<Carousel title={"NEAR YOU"}></Carousel>
			<MagicDivination
				heading="Kickstarter’s Annual Benefit Statement"
				url="https://user-images.githubusercontent.com/61180475/148780311-7a26779c-450b-4588-8103-ea8a4267873d.png"
				content="Being a Public Benefit Corporation allows us to stay focused on our mission: to help bring creative projects to life. Each year we report on how well we lived up to our commitments as a PBC."
			/>
			<MakingOf head={"THE MAKING OF"}></MakingOf>

			<CreatorsCorner />
			<MagicDivination
				heading="Forword Funds"
				url="https://user-images.githubusercontent.com/61180475/148780469-76bdf751-3fdb-495a-810d-e8691504d0fa.png"
				content="Get access to funds from nonprofits and foundations that back Kickstarter campaigns related to their visions for a more creative and equitable world."
			/>
			<FullCreator></FullCreator>
			<Footer />
		</div>
	);
}
