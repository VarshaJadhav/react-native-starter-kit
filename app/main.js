import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

import Routes from '../src/routes';
import Home from '../src/components/home';
import Menus from '../src/components/menus';

// Tab Screens
import TabOne from '../src/components/tab-one';
import TabTwo from '../src/components/tab-two';
import TabThree from '../src/components/tab-three';
import TabFour from '../src/components/tab-four';
import TabFive from '../src/components/tab-five'; 

// Pass routes/screens which wants in tabs
// {'key'('Tab One') represents tab name}
const TabNavigations = TabNavigator({
	'Tab One': Routes['TabOne'],
  'Tab Two': Routes['TabTwo'],
  'Tab Three': Routes['TabThree'],
  'Tab Four': Routes['TabFour'],
  'Tab Five': Routes['TabFive']
},
{ 
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: '#e91e63'
  },
  tabBarPosition: 'bottom'
});

//Pass all routes/screens in a stack navigator  
const StackNavigations = StackNavigator({
	Tab: {screen: TabNavigations},
  Home: {screen: Home},
	Welcome: Routes['Welcome'],
  Menus: Routes['Menus']
});

// Routes which want in drawer, that routes/screens pass in DrawerNavigator
export const DrawerNavigations = DrawerNavigator({
  App: {screen: StackNavigations},
  Welcome: Routes['Welcome']
});