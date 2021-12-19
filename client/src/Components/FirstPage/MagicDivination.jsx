import { Subtitles } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomBody2 from "./CustomBody2";

export default function MagicDivination({ url, heading, content,sub }) {
	const image = {
		width: "50%",
		height: "232px",
	};
	return (
		<div
			style={{
				// borderBottom: "1px solid #A3A3A3",
				borderTop: "1px solid #ebebeb",
			}}
		>
			<p style={{marginLeft: "9.5%",marginBottom:"2%",marginTop:"5%",textAlign:"left",fontSize:"12px",fontFamily:"Inter, sans-serif",fontWeight:"400"}}>{sub}</p>
			<div
				style={{
					display: "flex",
					marginLeft: "9.5%",
					marginBottom: "9%",
				}}
			>
				<img src={url} style={image} alt="" />
				<div>
					<div
						style={{
							borderLeft: "8px solid #018757",
							marginLeft: "10%",
							// width: "50%",
							// height: "100%",
							// marginTop: "6px",
						}}
					>
						<p
							style={{
								fontSize: "24px",
								textAlign: "left",
								marginLeft: "7%",
								// marginTop: "0px",
							}}
						>
							{heading}
						</p>
						<p
							style={{
								
								textAlign: "left",
								fontSize: "18px",
								// lineHeight: "22px",
								marginLeft: "7%",
								width: "80%",
							}}
						>
							{content}
						</p>
					</div>
					<div>
						<Link
							to={"./pagination"}
							style={{
								color: "blue",
								margin: "8% 9.5%",
								marginLeft: "10%"
							}}
						>
							Read more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
