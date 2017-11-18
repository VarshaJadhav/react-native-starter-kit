import React from 'react';
import {Text, Button, View, TouchableOpacity} from 'react-native';

import Welcome from '../components/welcome';
import Menus from '../components/menus';
import Home from '../components/home';

// Tab screens
import TabOne from '../components/tab-one';
import TabTwo from '../components/tab-two';
import TabThree from '../components/tab-three';
import TabFour from '../components/tab-four';
import TabFive from '../components/tab-five'; 


const Routes = {
	Welcome: { 
		screen: Welcome,
	    // Optional: Override the `navigationOptions` for the screen
	    navigationOptions: ({navigation}) => ({
	      headerTitle: 'Welcome'
	    }),
	},
	Home: { 
		screen: Home,
	    // Optional: Override the `navigationOptions` for the screen
	    navigationOptions: ({navigation}) => ({
	      headerTitle: 'Home'
	    }),
	},
	Menus: { 
		screen: Menus,
	    // Optional: Override the `navigationOptions` for the screen
	    navigationOptions: ({navigation}) => ({
	      headerTitle: 'Menu'
	    }),
	},

	// Tab routes
	TabOne: { 
		screen: TabOne,
	    // Optional: Override the `navigationOptions` for the screen
	    navigationOptions: ({navigation}) => ({
	      headerTitle: 'Tab One',
	      headerLeft: (
	      	<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={{paddingLeft: 10}}>
	      		<Text>Drawer</Text>
	      	</TouchableOpacity>
	     ),
	      headerTitleStyle: {
	      	marginLeft: 80
	      }
	    }),
	},
	TabTwo: { 
		screen: TabTwo,
	    // Optional: Override the `navigationOptions` for the screen
	    navigationOptions: ({navigation}) => ({
	      headerTitle: 'Tab Two',
	      headerLeft: (
	      	<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={{paddingLeft: 10}}>
	      		<Text>Drawer</Text>
	      	</TouchableOpacity>
	     ),
	      headerTitleStyle: {
	      	marginLeft: 80
	      }
	    }),
	},
	TabThree: { 
		screen: TabThree,
	    // Optional: Override the `navigationOptions` for the screen
	    navigationOptions: ({navigation}) => ({
	      headerTitle: 'Tab Three',
	      headerLeft: (
	      	<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={{paddingLeft: 10}}>
	      		<Text>Drawer</Text>
	      	</TouchableOpacity>
	     ),
	      headerTitleStyle: {
	      	marginLeft: 80
	      }
	    }),
	},
	TabFour: { 
		screen: TabFour,
	    // Optional: Override the `navigationOptions` for the screen
	    navigationOptions: ({navigation}) => ({
	      headerTitle: 'Tab Four',
	      headerLeft: (
	      	<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={{paddingLeft: 10}}>
	      		<Text>Drawer</Text>
	      	</TouchableOpacity>
	     ),
	      headerTitleStyle: {
	      	marginLeft: 80
	      }
	    }),
	},
	TabFive: { 
		screen: TabFive,
	    // Optional: Override the `navigationOptions` for the screen
	    navigationOptions: ({navigation}) => ({
	      headerTitle: 'Tab Five',
	      headerLeft: (
	      	<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={{paddingLeft: 10}}>
	      		<Text>Drawer</Text>
	      	</TouchableOpacity>
	     ),
	      headerTitleStyle: {
	      	marginLeft: 80
	      }
	    }),
	},
}

export default Routes;