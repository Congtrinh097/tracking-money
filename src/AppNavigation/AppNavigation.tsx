import { DrawerNavigator } from "react-navigation"
import {HomeScreen} from "../Screens/Home/HomeScreen";
import {ProfileScreen} from "../Screens/AboutScreen/AboutScreen";
import {HomeStackNavigator} from "./StackNavigation/HomeStackNavigator"
import {NativeHelper} from "../common/constains";
import {SideBar} from "../Components/Sidebar/SideBar";
import * as React from 'react'
import {IntroScreen} from "../Screens/IntroScreen/IntroScreen";



export const AppNavigation = DrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    },
    Intro: {
      screen: IntroScreen,
    }
  },
  {
    initialRouteName: 'Intro',
    drawerWidth: NativeHelper.ViewportWidth * .75,
    contentComponent: props => <SideBar {...props} />
  }
);
