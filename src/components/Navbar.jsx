import { signOut } from "firebase/auth";
import UseAuth from "../context/UseAuth";
import { auth } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const currentUser = UseAuth();
	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};
	const navigate = useNavigate();
	const signUp = () => {
		navigate("/sign-up");
	};
	return (
		<>
			<div>Navbar</div>
			<h1>{currentUser ? currentUser?.email : "person"}</h1>
			{currentUser ? (
				<button onClick={logout}>Logout</button>
			) : (
				<button onClick={signUp}>Register</button>
			)}
		</>
	);
}
