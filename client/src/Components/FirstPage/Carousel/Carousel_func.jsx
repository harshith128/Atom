import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import "./Car.css";

export default function Carousel_func({ title }) {
	const [details, setDetails] = useState([]);
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];

	const styles = {
		display: "flex",
		height: "311px",
		width: "100%",
		margin: "0 2%",
		borderRadius: "20px",
		// boxShadow: "2px 1px 5px 1px grey",
		flexDirection: "column",
		textAlign: "left",
		color: "white",
	};
	useEffect(() => {
		const run = async () => {
			const data = await axios.get("http://localhost:2357/projects/random");
			// console.log(data.data.projects)
			setDetails(data.data.projects);
		};
		run();
	}, []);
	// console.log(details);
	// console.log("details:", details);
	const random = () => {
		return Math.floor(Math.random() * 100);
	};

	// return <div></div>;
	return (
		<div
			style={{
				borderTop: "1px solid #ebebeb",
				borderBottom: "1px solid #ebebeb",
			}}
		>
			<div style={{ marginTop: "8%" }}>
				<div style={{ display: "flex", marginLeft: "5.5%" }}>
					<h3 style={{ color: "##000000", fontFamily: "Inter, sans-serif" }}>
						{title}
					</h3>
					<a href="./" className="link">
						<p style={{ color: "#003BFF" }}>Discover More {">"}</p>
					</a>
				</div>

				<Carousel breakPoints={breakPoints}>
					{details.map((e) => (
						<>
							<div style={styles}>
								<img src={e.coverImage} alt="" />
								<div
									style={{
										width: random(),
										height: "6px",
										backgroundColor: "#018757",
										color: "white",
									}}
								></div>
								<div className="hover">
									<p
										style={{
											textAlign: "left",
											color: "#282828",
											fontFamily: "Inter, sans-serif",
										}}
									>
										{e.projectName}
									</p>
								</div>
								<p
									style={{
										textAlign: "left",
										color: "#282828",
										marginBottom: "0px",
										marginTop: "2%",
										fontFamily: "Inter, sans-serif",
										fontSize: "12px",
									}}
								>
									{e.description}
								</p>
								<p
									style={{
										textAlign: "left",
										color: "#A3A3A3",
										marginTop: "5%",
										fontFamily: "Inter, sans-serif",
									}}
								>
									By {e.creator}
								</p>
							</div>
							{/* <div
							key={e.id}
							// onClick={() => {
							// 	handleKeep(e);
							// 	setState(true);
							// 	setPrice(e.small);
							// }}
							style={{
								...styles,
								backgroundImage: `linear-gradient(rgb(255, 255, 255, 0), rgb(0, 0, 0, 0.4)), url(${e.coverImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div
								style={{
									margin: "0px 10px 20px 20px",
									fontWeight: "500",
									fontSize: "18px",
								}}
							>{`${e.projectName} - ${e.category}☆`}</div>
							<div
								style={{
									margin: "0px 10px 0px 20px",
									fontWeight: "500",
									fontSize: "24px",
								}}
							>
								{e.creator}
							</div>
						</div> */}
						</>
					))}
				</Carousel>
			</div>
		</div>
	);
}
