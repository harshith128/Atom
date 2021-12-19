import "./App.css";

import SignupPage from "./Components/SignupPage/SignupPage";
import ConfirmationPage from "./Components/ConfirmationPage/ConfirmationPage";
import { Switch, Route, Link } from "react-router-dom";
import CardDetailPage from "./Components/CardDetailPage/CardDetailPage";
import FirstPage from "./Components/FirstPage/FirstPage";
import { DesignAndTech } from "./Components/SecondPage/DesignAndTech";
import { Exploremore } from "./Components/ExploreMore/Exploremore";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import LoginPage from "./Components/LoginPage/Login";
import { Rewards } from "./Components/RewardPage/Rewards";
import { Rewardconformation } from "./Components/RewardPage/Rewardsconformation";
import { Explore } from "./Components/SecondPage/Explore";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<FirstPage></FirstPage>
				</Route>

				<Route exact path="/category">
					<DesignAndTech />
				</Route>
				{/* <Route exact path="/explore">
					<Explore></Explore>
				</Route> */}
				<Route exact path="/product">
					<Explore></Explore>
				</Route>

				<Route exact path="/signup">
					<SignupPage />
				</Route>

				<Route exact path="/login">
					<LoginPage />
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
				</Route>
				<Route path="/reward">
					<Rewards />
				</Route>
				<Route path="/rewardconformationpage">
					<Rewardconformation />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
