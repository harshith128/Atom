import LogoNav from "../FirstPage/LogoNavbar/LogoNav";
import Nav from "../FirstPage/NavBar2/Nav";
import { Footer } from "../Footer/Footer";
import { Newsletter } from "../Newsletter/Newsletter";
import { DisplayProjects } from "../ProjectDisplay/DisplaySideScroll";
import { Explore } from "./Explore";

export const DesignAndTech = () => {
	const design = ["Product Design", "Toys", "Graphic Design", "Architechture"];
	const tech = ["Apps", "Gadgets", "Hardware", "Web", "Software", "3D Printing", "DIY Electronis", "Sound"]
    return (
        <div>
			<LogoNav />
			<Nav />
			<Newsletter />
            <Explore category="Design" subCategory={design} />
			<div>
				<DisplayProjects />
			</div>
			<div>
				<DisplayProjects />
			</div>
			<div>
				<DisplayProjects />
			</div>
			<Explore category="Technology" subCategory ={tech} />
			<Footer />
		</div>
    )
}