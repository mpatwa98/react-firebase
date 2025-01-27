import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "./Firebase";

export default function UseAuth() {
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});

		return unsubscribe;
	}, []);

	return currentUser;
}
