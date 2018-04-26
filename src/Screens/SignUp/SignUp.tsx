import * as React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {AppImage} from "../../common/variables";
import {Header, Icon, Left, Right, Title, Body, Container, Button} from "native-base";
import {ScreenName} from "../../common/constains";

interface thisProps {
  navigation: any
}

interface thisState {

}

export class SignUpScreen extends React.Component<thisProps, thisState> {
  static navigationOptions: any = {
    header: null,
  };

  renderHeader() {
    return (
      <View style={{backgroundColor: '#eeeeee', flexDirection: 'row'}}>
        <View style={{
          height: 60, width: 60, backgroundColor: '#eeeeee', justifyContent: 'center', alignItems: 'center',
          position: 'absolute', left: 0
        }}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate(ScreenName.ProfileScreen)}
          >
            <Icon name="arrow-back" style={{color: '#000', fontSize: 30}}/>
          </Button>
        </View>
        <View style={{height: 60, flex: 1}}>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={style.signUpContainer}>
        {this.renderHeader()}
        <Text style={style.textRegister}>Register using Social</Text>
        <View style={{paddingHorizontal: 20, width: '100%'}}>
          <View style={style.formSocial}>
            <View style={style.viewImage}>
              <Image source={AppImage.IconFb} style={style.iconFbGG}/>
            </View>
            <TextInput style={{flex: 7}} underlineColorAndroid="transparent" placeholder="Connect with Facebook"/>
          </View>
          <View style={style.formSocial}>
            <View style={style.viewImage}>
              <Image source={AppImage.IconGG} style={style.iconFbGG}/>
            </View>
            <TextInput style={{flex: 7}} underlineColorAndroid="transparent" placeholder="Connect with Google"/>
          </View>
        </View>
        <Text style={{fontSize: 15, color: '#7c7c7c', marginBottom: 10, marginTop: 10}}>We'll nerver port without your
          permission</Text>
        <View style={{
          flexDirection: 'row', justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={style.line}/>
          <Text style={{flex: 1, color: '#717171', fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>OR</Text>
          <View style={style.line}/>
        </View>
        <Text style={style.textRegister}>Register with email</Text>
        <View style={{paddingHorizontal: 20, width: '100%', marginBottom: 40}}>
          <TextInput style={{height: 50}} placeholder='Email' placeholderTextColor='#939393'/>
          <View style={{height: 50, flexDirection: 'row', marginBottom: 10}}>
            <TextInput style={{flex: 1}}
                       placeholder='PassWord' placeholderTextColor='#939393'/>
            <View style={{
              width: 50, height: 50, position: 'absolute',
              justifyContent: 'center', alignItems: 'center', right: 0
            }}>
              <Image source={AppImage.IconHideEye} style={style.iconFbGG}/>
            </View>
          </View>
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            backgroundColor: '#2cb84b',
            borderRadius: 5
          }}><Text style={{textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>REGISTER</Text></TouchableOpacity>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#4ab063'}}>SIGN IN</Text>
      </View>
    );
  }
}

export const style = StyleSheet.create({
  signUpContainer: {
    flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#eeeeee'
  },
  formSocial: {
    height: 50, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 5,
    marginBottom: 10, borderColor: '#fff', borderWidth: 1
  },
  viewImage: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  iconFbGG: {
    height: 20, width: 20, resizeMode: 'contain'
  },
  line: {
    flex: 4, height: 1, borderBottomWidth: 1, borderBottomColor: '#dbdbdb'
  },
  textRegister: {
    fontSize: 25, color: '#252525', marginBottom: 15, marginTop: 15
  }
})

