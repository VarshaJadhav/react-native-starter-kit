import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';

// actions
import setUserInfo from '../../actions/user-data';

// Routes
import Routes from '../../routes';

class TabOne extends Component {
	static navigationOptions = {
	  title: 'Tab One',
	}

	componentWillMount() {
		this.props.setUserInfo('varsha');
	}
	render() {
		const {navigate} = this.props.navigation;
		const {userInfo} = this.props;
		return(
			<View>
				<Text>Home</Text>
				<Text>below data coming from redux</Text>
				<Text>{userInfo}</Text>
				<Button title="click me" onPress={() => navigate('Menus')}/>
				<Button title="Drawer open" onPress={() => navigate('DrawerOpen')}/>

			</View>
		);
	}
}

function mapStateToProps (state) {
  const {
    userData: {
      userInfo
    }
  }=state;

  return {userInfo};
}

export default connect(mapStateToProps, {setUserInfo})(TabOne);