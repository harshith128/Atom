import "./App.css";

import SignupPage from "./Components/SignupPage/SignupPage";
import ConfirmationPage from "./Components/ConfirmationPage/ConfirmationPage";
import { Switch, Route } from "react-router-dom";
import CardDetailPage from "./Components/CardDetailPage/CardDetailPage";
import FirstPage from "./Components/FirstPage/FirstPage";
import { Exploremore } from "./Components/ExploreMore/Exploremore";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import { MenuPage } from "./Components/ProductPage/MenuPage";

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

				<Route exact path="/confirmation">
					<ConfirmationPage />
				</Route>
				<Route exact path="/exploremore">
					<Exploremore />
				</Route>
				<Route exact path="/productpage">
					<ProductPage />
					<MenuPage />
				</Route>
				
			</Switch>
		</div>
	);
}

export default App;
