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

  render() {
    return (
      <Container style={{backgroundColor: Colors.White }}>
        <View style={{backgroundColor: Colors.RedStrong, flexDirection: 'row'}}>
          <View style={{height: 60, width: 60, backgroundColor: Colors.RedStrong,  justifyContent: 'center', alignItems: 'center',
          position: 'absolute', left: 0}}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" style={{color: '#fff', fontSize: 30 }}/>
            </Button>
          </View>
          <View style={{ flex: 1,height: 60,justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Ghi điểm tiến lên</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={AppImage.Logo}  style={{height: '80%', width: '80%', resizeMode: 'contain' }}/>
          </View>
          <View style={{flex: 6, backgroundColor: '#a6ffb4'}}>

          </View>
        </View>
      </Container>
    );
  }
}