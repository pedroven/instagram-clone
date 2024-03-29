import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
	return (
		<React.Fragment>
			<StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
			<Routes />
		</React.Fragment>
	);
}
