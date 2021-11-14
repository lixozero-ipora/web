import React, { useContext, createContext, useState } from 'react';
import swal from 'sweetalert';
import api from '../services/api';

interface AuthContext {
	isLogedIn: boolean;
	handleLogin(user: string, password: string, callback: () => void): void;
	handleLogout(): void;
}

const AuthContext = createContext({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
	const [isLogedIn, setIsLogedIn] = useState(() => {
		const clearLocalStorage = () => {
			localStorage.clear();
			localStorage.setItem('@last_time_cleared', Date.now().toString());
		};

		const lastTimeCleared = localStorage.getItem('@last_time_cleared');

		if (!lastTimeCleared) {
			clearLocalStorage();
			return false;
		}

		const prevCleaning = new Date(parseInt(lastTimeCleared, 10));

		const diffBetweenNow = Date.now() - prevCleaning.getTime();

		if (diffBetweenNow > 60000 * 60 * 1.5) {
			clearLocalStorage();
		}

		const tokenInStorage = localStorage.getItem('@lixozero_token');

		if (tokenInStorage) {
			localStorage.setItem('@lixozero_token', tokenInStorage);
			api.defaults.headers['Authorization'] = `Bearer ${tokenInStorage}`;
			return true;
		}

		return false;
	});

	const handleLogin = async (
		user: string,
		password: string,
		callback?: () => void
	) => {
		try {
			const response = await api.post('/session', { user, password });

			localStorage.setItem('@lixozero_token', response.data.token);
			api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
			setIsLogedIn(true);
		} catch (error) {
			swal(
				'Erro',
				'Houveu um erro no login, talvez suas credenciais estejam erradas',
				'error'
			);
		} finally {
			if (callback) {
				callback();
			}
		}
	};
	const handleLogout = () => {
		localStorage.clear();
		setIsLogedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLogedIn, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContext => {
	const ctx = useContext(AuthContext);

	if (!ctx) {
		throw new Error('use auth provider must be inside its provider');
	}

	return ctx;
};
