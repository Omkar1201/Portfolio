import { Route, Routes } from "react-router-dom";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import './App.css'
function App() {
	return (
		<div className="App flex gap-12 bg-black p-16">

			<Navbar />
			<Me />
			<div className='border p-6 w-full rounded-3xl bg-white bg-opacity-5 border-opacity-10 border-white h-[60rem text-white'>
				<Routes>
					<Route path='/' element={<About/>}></Route>
					<Route path='/resume' element={<Resume/>}></Route>
					<Route path='/portfolio' element={<Portfolio/>}></Route>
					<Route path='/contact' element={<Contact/>}></Route>
				</Routes>
			</div>


		</div>
	);
}

export default App;
