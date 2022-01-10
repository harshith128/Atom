import { Typography } from "@mui/material";
import React from "react";
import Creator from "./CreatorSuccess/Creator";
import "./MakingOf.css";

export default function MakingOf({head}) {
	return (
		<div
			style={{
				// borderBottom: "1px solid #A3A3A3",
				borderTop: "1px solid #ebebeb",
			}}
		>
			<Typography
				variant="body2"
				style={{
					textAlign: "left",
					marginLeft: "9.5%",
					marginTop: "5%",
					marginBottom: "3%",
					color: "#000000",
				}}
			>
				{head}
			</Typography>
			<div
				style={{
					display: "flex",
					marginLeft: "9.5%",
					marginBottom: "8%",
				}}
			>
				<Creator
					url={
						"https://user-images.githubusercontent.com/61180475/148780759-943f9576-7417-479a-b799-5ed37befc74e.png"
					}
					caption=""
					title="Uusi's Secrets for Kickstarter Success"
					content="Linnea Gits of the Uusi design studio shares her Kickstarter story and pays it forward with tips for aspiring creators."
					w1="23%"
					h1="6px"
				></Creator>
				<Creator
					url={
						"https://user-images.githubusercontent.com/61180475/148790893-4b78beaf-626c-473c-bc06-43252184715a.png"
					}
					caption=""
					title="Composer Christopher Tin wants to create an album to commemorate extinct birds"
					content="The Grammy-winning artist is back with a requiem that offers some hope—and a warning—for the planet’s future."
					w1="53%"
					h1="6px"
				></Creator>
				<Creator
					url={
						"https://user-images.githubusercontent.com/61180475/148791055-321b4446-0cd7-4ac7-847d-c1de1ced2c0b.png"
					}
					caption=""
					title="9 creators share advice from their journeys to help guide yours"
					content="Over the last several weeks, we hosted a series of small workshops for creators of color and marginalized genders in the UK, in collaboration with gal-dem magazine. Here, we open up some of the insights and advice from those sessions to all."
					w1="88%"
					h1="6px"
				></Creator>
				<Creator
					url={
						"https://user-images.githubusercontent.com/61180475/148791204-3bcb962e-a115-4619-bf30-c490b63dc666.png"
					}
					caption=""
					title="Focusing on the artist behind the comics sensation"
					content="Filmmakers Jim Demonakos and Kevin Hanna are making a documentary about ‘Hellboy’ creator Mike Mignola."
					w1="67%"
					h1="6px"
				></Creator>
			</div>
		</div>
	);
}
