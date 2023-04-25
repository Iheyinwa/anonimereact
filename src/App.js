import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Details from './Pages/Details.js';
import Header from './components/Header/Header';
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/anime/:animeId" element={<Details />} />
			</Routes>
		</Router>
	);
}

export default App;
