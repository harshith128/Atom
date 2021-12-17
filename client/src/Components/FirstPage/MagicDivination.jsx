import { Subtitles } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomBody2 from "./CustomBody2";

export default function MagicDivination({ url, heading, content }) {
	const image = {
		width: "50%",
	};
	return (
		<div
			style={{
				borderBottom: "1px solid #A3A3A3",
				borderTop: "1px solid #A3A3A3",
			}}
		>
			<div
				style={{
					display: "flex",
					margin: "10% 9.5%",
				}}
			>
				<img src={url} style={image} alt="" />
				<Link
					to={"./pagination"}
					style={{
						position: "absolute",
						top: "273%",
						left: "51.6%",
						color: "blue",
					}}
				>
					Read more
				</Link>
				<div
					style={{
						borderLeft: "8px solid #018757",
						marginLeft: "2%",
						width: "50%",
						height: "100%",
						marginTop: "6px",
					}}
				>
					<p
						style={{
							fontSize: "24px",
							textAlign: "left",
							marginLeft: "2%",
							marginTop: "0px",
						}}
					>
						{heading}
					</p>
					<p
						style={{
							marginLeft: "2%",
							textAlign: "left",
							fontSize: "18px",
							lineHeight: "22px",
						}}
					>
						{content}
					</p>
				</div>
			</div>
		</div>
	);
}
