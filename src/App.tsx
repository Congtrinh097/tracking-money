import * as React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';


interface thisState {
}

export default class AppContainer extends React.Component<any, thisState> {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}> This is home screen</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    justifyContent: 'center'
  },
  text: {
    height: 30,
    backgroundColor: '#f00',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});