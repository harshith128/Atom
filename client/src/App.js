import "./App.css";
import LogoNav from "./Components/LogoNavbar/LogoNav";
import SignupPage from "./Components/SignupPage/SignupPage";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<LogoNav></LogoNav>
				</Route>
				<Route exact path="/signup">
					<SignupPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
