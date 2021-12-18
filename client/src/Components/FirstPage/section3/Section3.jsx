import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import React, { useState } from "react";
import "./Section.css";
// import CustomBody2 from "../CustomBody2";

export default function Section3() {

	const styleApp = {
		background: "#ffffff",
		border: "1px solid #cccccc",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		// padding: "2px 130px 1px",
		position: "absolute",
		width: "80%",
		height: "104px",
		left: "calc(50% - 80% / 2)",
		// top: "346px",
	};
	const para = {
		// display: "flex",
		// flexDirection: "column",
		// alignItems: "center",
		// width: "auto",
		height: "100%",
		// position: "static",
		// left: "130px",
		// top: "2px",
		// background: "#FFFFFF",
		boxShadow: "inset -2px 0px 0px #CCCCCC",
		// padding: "33px 152px 24px 0px",
		padding: "0px 152px 0px 0px",
	};
	const p_style = {
		fontSize: "30px",
		lineHeight: "34.5px",
		marginBottom: "0px",
		marginTop: "14%",
		color: "#016E47",
	};


	return (
		<div>
			<h1>
				Creative work shows us what’s possible.
				<br />
				Help fund it here.
			</h1>
			<p>WITHIN THE LAST DAY</p>

			<Box style={{ marginTop: "5%" }}>
				<AppBar position="static" style={styleApp}>
					<div style={para}>
						<p style={p_style}>137</p>
						<p style={{ marginTop: "0px", color: "#7A7A7A" }}>
							Projects Funded
						</p>
					</div>
					<div style={para}>
						<p style={p_style}>$2,322,287</p>
						<p style={{ marginTop: "0px", color: "#7A7A7A" }}>
							towards creative work
						</p>
					</div>
					<div>
						<p style={p_style}>25,245</p>
						<p style={{ marginTop: "0px", color: "#7A7A7A" }}>backings</p>
					</div>
				</AppBar>
			</Box>

		</div>
	);
}
