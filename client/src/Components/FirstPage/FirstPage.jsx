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
			<Carousel title={"FRESH FAVORITE"}></Carousel>
			<Carousel title={"TAKING OFF"}></Carousel>
			<Carousel title={"HOME STRETCH"}></Carousel>
			<Newsletter />
			<Carousel title={"NEAR YOU"}></Carousel>
			<MagicDivination
				heading="Kickstarter’s Annual Benefit Statement"
				url="https://s3-alpha-sig.figma.com/img/de25/f3cc/08b3c6b78edf8647e582c1d7cbbe45d8?Expires=1640563200&Signature=WUC-dkU~I7Rms6ahfW8HgwJ6l8moXzYw0CdNrgYW3wvjrdzpTu6lKnGFIf~~ESCKyjexg0msoFqDVcAZP1Kl5rDuad3UrUoY7DYbs4eVekLYiwLCQXsC~JAkCu6fagTQ6o47QY8aEL3QT7xd-rT~IS~44yLbQ9aviTLO7yaAqkMTFEKCy9tGXoAmnUpYqGXnRSLo-U9L0gV0t5nAXlejXk5SbhuL5tlGgYnA0d8COu3TGMSzSWeq1zqua-Tq0Y5WDs5xB9yC7fseJ3lBrSfFS1FCddtmnaZU5chGvwogetJO-iNAkgayiZQKhhDrBKERGT-6H6CWYbbS6C9AGDtGPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				content="Being a Public Benefit Corporation allows us to stay focused on our mission: to help bring creative projects to life. Each year we report on how well we lived up to our commitments as a PBC."
			/>
			<MakingOf head={"THE MAKING OF"}></MakingOf>

			<CreatorsCorner />
			<MagicDivination
				heading="Forword Funds"
				url="https://s3-alpha-sig.figma.com/img/f4b9/ab05/fb98362db19943eeb062397046abe24e?Expires=1640563200&Signature=INBPYL3NAb5ekhhFQ~QNZaoz-zfqR2O9HEg1gI8RiHZAbXuUgr7K11uyUUYHIOKnjDwqiwDrhSkxN4aCf6vlBc~8Z2QwTZTrjKNl8zbDCrBB2aqB23dQuUZd9FvPMik0Dcl6mO3QDpG20-9oSKH2xp6QNvLbC62a64m8ugznECafhoVW3Pkls4biqZWZepfTjFpbX3ovRNP7dvHd1NgfywD3jVB6oSEK9uK3M1HXvWRF0BTvbJS~BYr730Y48mEup0wV7pDUBxx7s0msLLXHajGJTLHweNjPGDu8dhuvmX~q1h1T8nbbmOn7G0qRw0FehfZJp7CJsw7Aa2a-mcs4PA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				content="Get access to funds from nonprofits and foundations that back Kickstarter campaigns related to their visions for a more creative and equitable world."
			/>
			<FullCreator></FullCreator>
			<Footer />
		</div>
	);
}
