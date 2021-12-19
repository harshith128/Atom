import { Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import CustomBody2 from "../CustomBody2";
import "./Nav.css";
import { DesignAndTech } from "../../SecondPage/DesignAndTech";

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
					{/* <CustomBody2 className="nav" sx={"nav"} arts={"Arts"} />
					<CustomBody2 sx={"nav"} arts={"Comics and Illustrations"} />
					<CustomBody2 sx={"nav"} arts={"Design & Tech"} />
					<CustomBody2 sx={"nav"} arts={"Film"} />
					<CustomBody2 sx={"nav"} arts={"Food & Craft"} />
					<CustomBody2 sx={"nav"} arts={"Games"} />
					<CustomBody2 sx={"nav"} arts={"Music"} />
					<CustomBody2 sx={"nav"} arts={"Publishing"} /> */}
					<div className="family" >Arts</div>
					<div className="family">Comics and Illustrations</div>
					<div className="family"><Link to="/category" style={{textDecoration:"none"}}>Design & Tech</Link></div>
					<div className="family">Film</div>
					<div className="family">Food & Craft</div>
					<div className="family">Games</div>
					<div className="family">Music</div>
					<div className="family">Publishing</div>
					
					
				</Toolbar>
			</div>
		</Box>
	);
}
