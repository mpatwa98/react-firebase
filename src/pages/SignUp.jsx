import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, db, provider } from "../context/Firebase";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");

	const SignUp = async () => {
		try {
			const email = inputEmail;
			const password = inputPassword;
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			const usersCollectionRef = doc(db, "users", user.uid);
			await setDoc(usersCollectionRef, { email, password });

			setInputEmail("");
			setInputPassword("");
		} catch (error) {
			console.log(error);
		}
	};

	const signInWithGoogle = async () => {
		try {
			const userCredential = await signInWithPopup(auth, provider);
			const user = userCredential.user;
			const email = user.email;
			const usersCollectionRef = doc(db, "users", user.uid);
			await setDoc(usersCollectionRef, { email, googleAuth: true });
			console.log("userCredential: ", userCredential);
		} catch (error) {
			console.log("error: ", error);
		}
	};

	return (
		<div>
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
			<button onClick={SignUp}>Submit</button>
		</div>
	);
}
