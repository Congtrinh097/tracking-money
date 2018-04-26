import * as React from 'react'
import {StackNavigator} from 'react-navigation';
import {HomeScreen} from "../../Screens/Home/HomeScreen";
import {ProfileScreen} from "../../Screens/AboutScreen/AboutScreen";
import {View} from 'react-native';
import {Button, Icon} from 'native-base';
import {SignUpScreen} from "../../Screens/SignUp/SignUp";

const renderDrawerBtn = (props: any) => {
  return (
    <View>
      <Button transparent onPress={() => props.navigation.navigate('DrawerOpen')}>
        <Icon name='ios-menu' style={{color: '#3526ff', fontSize: 40}}/>
      </Button>
    </View>
  )
};

export const HomeStackNavigator = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: (props: any) => ({
      headerTitle: 'Home screen',
      headerLeft: renderDrawerBtn(props),
      headerRight: true,
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
  SignUpScreen: {
    screen: SignUpScreen,
  },
}, {
  initialRouteName: "ProfileScreen",
  headerMode: 'screen'
});