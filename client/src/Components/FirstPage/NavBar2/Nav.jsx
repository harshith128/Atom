import { Box, Toolbar } from "@mui/material";
import React from "react";
import CustomBody2 from "../CustomBody2";
import "./Nav.css";

export default function Nav() {
	return (
		<Box>
			<div
				style={{
					background: "#FFFFFF",
					border: "1px solid #EBEBEB",
				}}
			>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-evenly",
						background: "white",
						marginLeft: "10%",
						marginRight: "8%",
					}}
				>
					<CustomBody2 sx={"nav"} arts={"Arts"} />
					<CustomBody2 sx={"nav"} arts={"Comics and Illustrations"} />
					<CustomBody2 sx={"nav"} arts={"Design & Tech"} />
					<CustomBody2 sx={"nav"} arts={"Film"} />
					<CustomBody2 sx={"nav"} arts={"Food & Craft"} />
					<CustomBody2 sx={"nav"} arts={"Games"} />
					<CustomBody2 sx={"nav"} arts={"Music"} />
					<CustomBody2 sx={"nav"} arts={"Publishing"} />
				</Toolbar>
			</div>
		</Box>
	);
}
