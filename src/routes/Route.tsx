import React from 'react';
import {
	Redirect,
	Route as RouteDOM,
	RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { useAuth } from '../store/authContext';

interface RouteProps extends ReactDOMRouteProps {
	isPrivate?: boolean;
	Component: React.ReactNode;
}

const Route: React.FC<RouteProps> = ({ isPrivate, Component, ...rest }) => {
	const { isLogedIn } = useAuth();

	if (!isLogedIn && isPrivate) {
		return <Redirect to="/" />;
	}

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <RouteDOM {...rest}>{Component}</RouteDOM>;
};

export default Route;
