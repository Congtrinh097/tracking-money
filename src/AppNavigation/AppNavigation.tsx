import { DrawerNavigator } from "react-navigation"
import {HomeScreen} from "../Screens/Home/Home";
import {ProfileScreen} from "../Screens/Profile/Profile";
import {HomeStackNavigator} from "./StackNavigation/HomeStackNavigator"
import {NativeHelper} from "../common/constains";
import {SideBar} from "../Components/Sidebar/SideBar";
import * as React from 'react'



export const AppNavigation = DrawerNavigator(
  {
    home: {
      screen: HomeStackNavigator
    }
  },
  {
    initialRouteName: 'home',
    drawerWidth: NativeHelper.ViewportWidth * .75,
    contentComponent: props => <SideBar {...props} />
  }
);