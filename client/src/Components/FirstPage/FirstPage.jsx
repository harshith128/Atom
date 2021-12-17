import React from "react";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import LogoNav from "./LogoNavbar/LogoNav";
import MagicDivination from "./MagicDivination";
import Nav from "./NavBar2/Nav";
import Recommended from "./Recommended/Recommended";
import Section3 from "./section3/Section3";

export default function FirstPage() {
	return (
		<div>
			<LogoNav></LogoNav>
			<Nav></Nav>
			<Section3></Section3>
			<div style={{ display: "flex" }}>
				<FeaturedProject></FeaturedProject>
				<Recommended></Recommended>
			</div>
			<MagicDivination
				heading="Magic and Divination"
				url="https://s3-alpha-sig.figma.com/img/df86/f00a/5ec0326ce04b160a9a32d228a03a6b92?Expires=1640563200&Signature=d95Q8vvGbZmunUOK8SmoxW6MfHX84z10-ZT8LE8SiNCBBMhyUwadZ61eErXV8CfeoEC2EpaEi3tw7P9DgyGehCBmEduXmvCMU3-ANuVyU8AVESy5uOvXCOdyBayerSB32o54WPTVxXffCn5EIYp7L3Dn8joaleNGpSqejVWB6gNkovHgUh-YZacvGkywncX3n83d64bKLkO9c9qTL3OawlElvhzsc4CyHSu9DIThcBUwkBtezUVoq1IHT404wEdZnGX7~6Yz0kpklYA9nqbqXsHFqOSACufRAizWht0VvNgyMkSwQk7ayOzQaCSEGbuWKesa1Ab3WP8J3~V6o1pbPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				content="From terrific tarot decks and wizarding wands to arcane accessories,
						eldritch electronics, sorcerous stationery, and so much more, you
						can now find all the most spellbinding projects here in one place."
			/>
		</div>
	);
}
