import { useState, useContext } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const authCtx = useContext(AuthContext);

	async function loginHandler({ email, password }) {
		setIsAuthenticating(true);

		try {
			const token = await login(email, password);
			authCtx.authenticate(token);
		} catch (error) {
			console.log(error);
			Alert.alert('Authentication failed!', 'could not log you in, please check your credentials or try again later');
			setIsAuthenticating(false);
		}
	}

	if (isAuthenticating) {
		return <LoadingOverlay message='Logging you in...' />;
	}

	return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
