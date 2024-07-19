import Home from "./components/Home";
import Me from "./components/Me";

function App() {
	return (
		<div className="App flex gap-12 bg-black p-16">
			<Me/>
			<Home/>
		</div>
	);
}

export default App;
