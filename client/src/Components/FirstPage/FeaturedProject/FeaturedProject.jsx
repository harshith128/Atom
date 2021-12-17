import React, { useEffect, useState } from "react";
import CustomBody2 from "../CustomBody2";
import "./FeaturedProject.css";
import axios from "axios";

export default function FeaturedProject() {
	const [res, setRes] = useState([]);

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
		marginTop: "8.5%",
		position: "relative",
		width: "46%",
		height: "48%",
		marginLeft: "10%",
		boxShadow: "2px 0px 0px rgba(163, 163, 163, 0.25)",
	};
	const imageBox = {
		width: "87%",
		marginTop: "7%",
	};
	const projectTitle = {
		fontSize: "1.9rem",
		lineHeight: "2.2rem",
		marginLeft: "1%",
		textAlign: "left",
		wordWrap: "normal",
	};
	const projectDesc = {
		fontSize: "1.3rem",
		marginLeft: "1%",
		textAlign: "left",
		wordWrap: "normal",
	};
	return (
		<>
			<div style={featured}>
				{/* {console.log(res.description)} */}
				<div style={imageBox} className="target_p">
					<p
						style={{
							marginTop: "0.7rem",
							marginLeft: "1%",
							textAlign: "left",
							fontWeight: 500,
						}}
					>
						FEATURED PROJECT
					</p>
					<img
						src={res.coverImage}
						alt=""
						className="projectImage"
					/>
					<p style={projectTitle}>{res.projectName}</p>
					<p style={projectDesc}>{res.description}</p>
					<p
						style={{
							fontSize: "0.7rem",
							marginTop: "3rem",
							textAlign: "left",
							marginLeft: "1%",
						}}
					>
						By {res.creator}
					</p>
				</div>
			</div>
			<div style={{ border: "1px solid #A3A3A3", marginTop: "1%" }}></div>
		</>
	);
}
