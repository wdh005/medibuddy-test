import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DetailPage from "./Pages/DetailPage/DetailPage";

function App() {
	return (
		<Switch>
			<Route path="/" exact>
				<Redirect to="/login" />
			</Route>
			<Route path="/main" component={MainPage} />
			<Route path="/login" component={LoginPage} />
			<Route path="/detail" component={DetailPage} />
		</Switch>
	);
}

export default App;
