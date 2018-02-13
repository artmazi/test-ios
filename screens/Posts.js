import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.defaultText}>Posts</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1f1f1f',
		justifyContent: 'center',
		alignItems: 'center'
	},
	defaultText: {
		fontSize: 20,
		color: '#fff'
	}
});
