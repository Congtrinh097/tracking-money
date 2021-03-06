import {Dimensions, Platform} from "react-native";

export const NativeHelper = {
  ViewportWidth: Dimensions.get('window').width,
  ViewportHeight: Dimensions.get('window').height,
  Platform: Platform.OS,
};

export const ScreenName = {
  HomeScreen: 'HomeScreen',
  ProfileScreen: 'ProfileScreen',
  SignUpScreen: 'SignUpScreen'
}