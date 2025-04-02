import Me from "./components/Me";
import './App.css'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
	return (
		<div className="bg-black addpadding min-h-screen flex flex-col">
			<div className="App relative flex gap-12 p-14">
				<Me />
				<Home />
			</div>
			<div className="bottomnavbar fixed bottom-[-0.1rem] w-screen hidden">
				<Navbar />
			</div>
		</div>
	);
}

export default App;
