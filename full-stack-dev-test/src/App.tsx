import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { HomePage } from "./pages/home-page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<LandingPage />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
