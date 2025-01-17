import axios from 'axios';

const FIREBASE_URL_V1 = 'https://identitytoolkit.googleapis.com/v1';
const API_KEY = 'API';

export async function createUser(email, password) {
	axios.post(`${FIREBASE_URL_V1}/accounts:signUp?key=${API_KEY}`, {
		email: email,
		password: password,
		returnSecureToken: true,
	});
}
