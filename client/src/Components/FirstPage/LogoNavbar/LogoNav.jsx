import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LOGO from "../../../utils/svgs/Logo.svg";
import SEARCH from "../../../utils/svgs/search.svg";
import CLOSE from "../../../utils/svgs/Close.svg";
import "./LogoNav.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";


const theme = createTheme();
theme.typography.body2 = {
	fontFamily: ["Inter", "sans-serif"].join(","),
	fontSize: "14px",
};
export default function LogoNav() {
	const [render, setRender] = React.useState(true);
	const handleSearch = () => {
		setRender(!render);
	};
	if (render) {
		return (
			<Box >
				<Toolbar style={{backgroundColor: "white"}}>
					<ThemeProvider theme={theme}>
						<Typography variant="body2" className="hover">
							Discover
						</Typography>
						<Typography variant="body2" className="hover" style={{ flexGrow: "1", textAlign: "start", marginLeft:"2%"}}>
							Start a project
						</Typography>
						<div style={{ flexGrow: "1" }}>
							<Link to="/"><img src={LOGO} alt="" /></Link>
						</div>
						<div id="forFlex" onClick={handleSearch}>
							<p className="hover">Search</p>
							<img className="hover" src={SEARCH} alt="" />
						</div>
						<div className="hover">Login</div>
					</ThemeProvider>
				</Toolbar>
			</Box>
		);
	} else {
		return (
			<Box >
                <Toolbar>
                    <TextField style={{ width: "100%", outline: "none" }} placeholder="Search for projects or categories" ></TextField>
                    <img className="closeIcon" onClick={handleSearch} src={CLOSE} alt="" />
                    
                </Toolbar>
			</Box>
		);
	}
}

// import React from "react";
// import LOGO from "../utils/svgs/Logo.svg";
// import { Search } from "@mui/icons-material";
// import "./LogoNav.css";

// export default function LogoNav() {
// 	return (
// 		<div className="forFlex">
// 			<div className="inForFlex">
// 				<div>Discover</div>
// 				<div>Start a project</div>
// 			</div>
// 			<div>
// 				<img src={LOGO} alt="" />
// 			</div>
// 			<div className="inForFlex">
// 				<div >
// 					Search
// 				</div>
// 				<div>Login</div>
// 			</div>
// 		</div>
// 	);
// }
