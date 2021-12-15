import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import "./Section.css";

export default function Section3() {
	const styleApp = {
		background: "#ffffff",
		border: "1px solid #cccccc",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: "2px 130px 1px",
		position: "absolute",
		width: "1128px",
		height: "104px",
		left: "calc(50% - 1128px / 2)",
		top: "346px",
	};
	return (
		<div>
			<h1>
				Creative work shows us what’s possible.
				<br />
				Help fund it here.
			</h1>
			<p>WITHIN THE LAST DAY</p>
			<Box>
				<AppBar position="static" style={styleApp}>
					<Toolbar>41 Projects Funded</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}
