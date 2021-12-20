import React, { useEffect, useState } from "react";
import CustomBody2 from "../CustomBody2";
import "./FeaturedProject.css";
import axios from "axios";

export default function FeaturedProject() {
	const [res, setRes] = useState([]);

	const random = () => {
		return Math.floor(Math.random() * 100);
	};

	useEffect(() => {
		const fetchData = async () => {
			const ans = await axios.get("http://localhost:2357/projects/random");
			setRes(ans.data.projects[0]);
		};
		fetchData();
	}, []);
	// async function load() {
	// 	let data = await axios
	// 		.get("http://localhost:2357/projects/random")
	// 		.then((d) => setRes(d));
	// }
	// console.log(res.data.projects[0]);
	const featured = {
		marginTop: "100px",
		position: "relative",
		width: "46%",
		height: "48%",
		marginLeft: "10%",
		borderRight: "1px solid #00000026",
	};
	const imageBox = {
		width: "87%",
		marginTop: "7%",
		// boxShadow: "0px 1px 0px rgba(163, 163, 163, 0.25)",
	};

	const projectDesc = {
		fontSize: "16px",
		marginTop: "10px",
		marginLeft: "1%",
		textAlign: "left",
		wordWrap: "normal",
		fontWeight: "400",
	};
	return (
		<>
			<div style={featured}>
				{/* {console.log(res.description)} */}
				<div style={imageBox} className="target_p">
					<p className="feature-para-title">FEATURED PROJECT</p>
					<img src={res.coverImage} alt="" className="projectImage" />
					<div
						style={{
							width: random(),
							height: "6px",
							backgroundColor: "#018757",
							color: "white",
							margin: "0px",
						}}
					></div>
					<p className="pro-home-name">{res.projectName}</p>
					<p className="pro-home-desc">{res.description}</p>
					<p className="pro-home-creator">By {res.creator}</p>
				</div>
			</div>
		</>
	);
}
