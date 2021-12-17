import React from "react";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import LogoNav from "./LogoNavbar/LogoNav";
import Nav from "./NavBar2/Nav";
import Recommended from "./Recommended/Recommended";
import Section3 from "./section3/Section3";

export default function FirstPage() {
	return (
		<div>
			<LogoNav></LogoNav>
			<Nav></Nav>
			<Section3></Section3>
			<div style={{display:"flex"} }>
				<FeaturedProject></FeaturedProject>
				<Recommended></Recommended>
			</div>
		</div>
	);
}
