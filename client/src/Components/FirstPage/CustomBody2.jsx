import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// import "./FeaturedProject/FeaturedProject.css";

export default function CustomBody2({arts,sx}) {
	const theme = createTheme();
	theme.typography.body2 = {
		fontFamily: ["Inter", "sans-serif"].join(","),
		fontSize: "14px",
		color: "#282828"
	};
	return (
		<ThemeProvider theme={theme}>
			<Typography variant="body2" style={{sx}} >
				{arts}
			</Typography>
		</ThemeProvider>
	);
}
