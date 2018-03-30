import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';


interface thisState {
  isReady: boolean,
  isOffline: boolean
}

export default class App extends React.Component<any, thisState> {
  render() {
    return (
        <View style={style.container}>
          <StatusBar
            translucent
            barStyle="light-content"
          />
        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});