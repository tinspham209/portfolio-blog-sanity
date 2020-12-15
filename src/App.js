import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Home, Navbar, Post, Project, SinglePost } from "./components";
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" />
				<Route component={SinglePost} path="/post/:slug" />
				<Route component={Post} path="/post" />
				<Route component={Project} path="/project" />
			</Switch>
		</Router>
	);
}

export default App;
