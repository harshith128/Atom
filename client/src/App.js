import "./App.css";
import LogoNav from "./Components/LogoNavbar/LogoNav";
import SignupPage from "./Components/SignupPage/SignupPage";
import { Switch, Route } from "react-router-dom";
import CardDetailPage from "./Components/CardDetailPage/CardDetailPage";
import ConfirmationPage from "./Components/ConfirmationPage/ConfirmationPage";

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
				
				<Route exact path="/carddetail">
					<CardDetailPage />
				</Route>

				<Route exact path="/confirmation">
					<ConfirmationPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
