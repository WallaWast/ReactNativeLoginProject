import axios from 'axios';

const FIREBASE_URL_V1 = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = 'API';

async function authenticate(mode, email, password) {
	const url = `${FIREBASE_URL_V1}${mode}?key=${API_KEY}`;

	const response = await axios.post(url, {
		email: email,
		password: password,
		returnSecureToken: true,
	});

	return response.data.idToken;
}

export function createUser(email, password) {
	return authenticate('signUp', email, password);
}

export function login(email, password) {
	return authenticate('signInWithPassword', email, password);
}
