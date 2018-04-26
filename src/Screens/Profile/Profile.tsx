import * as React from 'react';
import {StatusBar, StyleSheet, View, Text, Button} from 'react-native';
import {ScreenName} from "../../common/constains";

interface thisProps {
  navigation: any
}

interface thisState {

}
export class ProfileScreen extends React.Component<thisProps, thisState> {
  static navigationOptions = {
    headerTitle:'Profile',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate(ScreenName.SignUpScreen);
          }}
        />
      </View>
    );
  }
}