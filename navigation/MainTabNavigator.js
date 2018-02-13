import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import Browse from '../screens/Browse';
import Posts from '../screens/Posts';
import Favorites from '../screens/Favorites';
import Redeemed from '../screens/Redeemed';
import Profile from '../screens/Profile';

export default TabNavigator(
  {
    Browse: {
      screen: Browse,
    },
    Posts: {
      screen: Posts,
    },
    Favorites: {
      screen: Favorites,
	},
	Redeemed: {
		screen: Redeemed,
	},
	Profile: {
		screen: Profile,
	}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
			case 'Browse':
            	iconName = Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home';
            break;
			case 'Posts':
            	iconName = Platform.OS === 'ios' ? `ios-camera${focused ? '' : '-outline'}` : 'md-camera';
            break;
			case 'Favorites':
				iconName = Platform.OS === 'ios' ? `ios-heart${focused ? '' : '-outline'}` : 'md-heart';
			break;
			case 'Redeemed':
				iconName = Platform.OS === 'ios' ? `ios-albums${focused ? '' : '-outline'}` : 'md-albums';
			break;
			case 'Profile':
				iconName = Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person';
			break;
		}
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
	swipeEnabled: true
  }
);
