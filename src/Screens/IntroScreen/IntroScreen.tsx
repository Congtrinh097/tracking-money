import * as React from 'react';
import {StatusBar, StyleSheet, View, Text, Button, Image, Dimensions} from 'react-native';
import {ScreenName} from "../../common/constains";
import {AppImage, Colors} from "../../common/variables";
import ButtonBordered from "../../Components/Button";

var {height, width} = Dimensions.get('window');

interface thisProps {
  navigation: any
}

interface thisState {

}

export class IntroScreen extends React.Component<thisProps, thisState> {
  static navigationOptions = {
    headerTitle: 'Intro Screen',
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.InfoContainer}>
          <View style={styles.ImageContainer}>
            <Image source={AppImage.Logo} style={{resizeMode: 'contain'}}/>
          </View>
          <View style={styles.TextInfo}></View>
          <Text> Component won't make use of actual width and height of the image.</Text>
        </View>
        <View style={styles.PaginateContainer}>

        </View>
        <View style={styles.ButtonContainer}>
          <ButtonBordered onPress={()=>{}} title={'Next'}/>
          <ButtonBordered onPress={()=>{}} title={'Already using this appplication '}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Green
  },
  InfoContainer: {
    flex: 6,
    backgroundColor: '#fff'
  },
  ImageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInfo: {
    flex: 1
  },
  PaginateContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ButtonContainer: {
    flex: 2,
    justifyContent: 'space-around'
  },
});