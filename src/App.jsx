import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/sign-up" element={<SignUp />} />
				{/* <Route exact path="/profile" element={<Login />} /> */}
			</Routes>
		</>
	);
}

export default App;
