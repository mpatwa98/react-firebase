import {
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth, provider } from "../context/Firebase";
import { useState } from "react";

export default function Login() {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const signInWithGoogle = async () => {
		try {
			const userCredential = await signInWithPopup(auth, provider);
			console.log("userCredential: ", userCredential);
		} catch (error) {
			console.log("error: ", error);
		}
	};

	const LogIn = async () => {
		try {
			const email = inputEmail;
			const password = inputPassword;
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			setInputEmail("");
			setInputPassword("");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<button onClick={signInWithGoogle}>Sign In Google</button>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					value={inputEmail}
					onChange={(e) => setInputEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					value={inputPassword}
					onChange={(e) => setInputPassword(e.target.value)}
				/>
			</div>
			<button onClick={LogIn}>Submit</button>
		</div>
	);
}
