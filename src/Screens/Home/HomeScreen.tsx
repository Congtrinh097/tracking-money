import * as React from 'react';
import {StatusBar, StyleSheet, View, Text, Image} from 'react-native';
import {ScreenName} from "../../common/constains";
import {Header, Icon, Left, Right, Title, Body, Container} from "native-base";
import {AppImage, Colors} from "../../common/variables";

const Button: any = require('native-base').Button;

interface thisProps {
  navigation: any
}

interface thisState {

}

export class HomeScreen extends React.Component<thisProps, thisState> {

  static navigationOptions: any = {
    header: null,
  };

  renderHeader() {
    return (
      <View style={{backgroundColor: Colors.Green, flexDirection: 'row'}}>
        <View style={{
          height: 60, width: 60, backgroundColor: Colors.Green, justifyContent: 'center', alignItems: 'center',
          position: 'absolute', left: 0
        }}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="ios-menu" style={{color: '#fff', fontSize: 30}}/>
          </Button>
        </View>
        <View style={{flex: 1, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#fff'}}>100.000</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Container style={{backgroundColor: Colors.White}}>
        {this.renderHeader()}
        <View style={{flex: 1}}>
        </View>
      </Container>
    );
  }
}

export const styles = StyleSheet.create({
  logoContainer:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderButton: {
    borderColor: Colors.RedStrong,
    width: '35%',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 3,
    shadowColor: Colors.RedStrong,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
  redButton: {
    borderColor: Colors.RedStrong,
    backgroundColor: Colors.RedStrong,
    width: '60%',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 3,
  }
})