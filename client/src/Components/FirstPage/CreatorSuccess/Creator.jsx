import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, createTheme, ThemeProvider } from "@mui/material";
import "./Creator.css";

export default function Creator({ url, title, content, caption,w1,h1 }) {
	const theme = createTheme({
		typography: {
			// In Chinese and Japanese the characters are usually larger,
			// so a smaller fontsize may be appropriate.
      fontSize: 12,
		},
  });
	return (
		<Card sx={{ width: 264 ,marginRight:"2%",boxShadow:"none"}}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="312"
					image={url}
					alt="green iguana"
        />
        <div style={{
          background: "#018757",
          width: w1,
          height: h1
        }}></div>
        <CardContent >
          
					<Typography
						gutterBottom
						variant="caption"
						color="text.secondary"
						component="div"
					>
						{caption}
					</Typography>
					<Typography gutterBottom variant="body" component="div">
						{title}
					</Typography>

					<ThemeProvider theme={theme}>
						<Typography color="text.secondary" style={{textAlign:"left"}}>
							{content}
						</Typography>
					</ThemeProvider>
					<Typography
						gutterBottom
						variant="caption"
						color="text.disabled"
						style={{ marginTop: "8%" }}
						component="div"
					>
						Read More
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
