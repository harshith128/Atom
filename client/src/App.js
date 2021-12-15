import "./App.css";

import SignupPage from "./Components/SignupPage/SignupPage";
import { Switch, Route } from "react-router-dom";
import CardDetailPage from "./Components/CardDetailPage/CardDetailPage";
import FirstPage from "./Components/FirstPage/FirstPage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<FirstPage></FirstPage>
				</Route>
				<Route exact path="/signup">
					<SignupPage />
				</Route>
				<Route exact path="/carddetail">
					<CardDetailPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
