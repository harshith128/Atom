import { Typography } from "@mui/material";
import React from "react";
import Creator from "./Creator";

export default function FullCreator() {
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
				CREATOR SUCCESS STORIES
			</Typography>
			<div
				style={{
					display: "flex",
                    marginLeft: "9.5%",
                    marginBottom:"8%"
				}}
			>
				<Creator
					url={
						"https://user-images.githubusercontent.com/61180475/148791506-df0576b7-8d1f-4fb5-b575-86e1dd2a2e8b.png"
					}
					caption="Community Engagement"
					title="Reviving ‘Wax Poetics,’ the cult magazine for long-form music journalism and vinyl culture"
					content="After the magazine closed down, longtime readers Alex Bruh and David Holt launched a campaign to rally an existing and expanding community."
				></Creator>
				<Creator
					url={
						"https://user-images.githubusercontent.com/61180475/148791632-64dfa38d-551e-4f03-b945-4cbfd410722c.png"
					}
					caption="Small bussiness"
					title="How tarot creator Krystal Banner strengthens her intuition—and business—on Kickstarter"
					content="The all-or-nothing crowdfunding model can serve as a poll on what projects are worth her time."
				></Creator>
				<Creator
					url={
						"https://user-images.githubusercontent.com/61180475/148791712-6fc36921-73c4-49b9-9a9a-0b0730401537.png"
					}
					caption="Community Engagement"
					title="Creators: Plan what you can, but prepare for twists and turns"
					content="This poet and printer wanted to engage the communities along the Columbia River. It didn’t go exactly as planned, but their go-with-the-flow attitude brought them through."
				></Creator>
				<Creator
					url={
						"https://user-images.githubusercontent.com/61180475/148790893-4b78beaf-626c-473c-bc06-43252184715a.png"
					}
					caption="Community Engagement"
					title="Craighton Berman's advice for simple creative campaigns"
					content="This designer relies on big campaigns to build his independent practice. But here’s how he gives himself a break—and new opportunities—with smaller campaigns."
				></Creator>
			</div>
		</div>
	);
}
