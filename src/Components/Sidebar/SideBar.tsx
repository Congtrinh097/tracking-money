import * as React from 'react';
import {Content, Text} from 'native-base';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NativeHelper, ScreenName} from "../../common/constains";
import {Colors} from "../../common/variables";

const defaultAvatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Taxus_wood.jpg/220px-Taxus_wood.jpg';

const menuData = [
  {
    title: 'Trang chủ',
    linkTo: ScreenName.HomeScreen,
  },
  {
    title: 'Thông tin cá nhân',
    linkTo: ScreenName.ProfileScreen
  }
];

export class SideBar extends React.Component<any, any> {

  routeToScreen(screenName: string) {
    if (screenName) {
      this.props.navigation.navigate(screenName);
    }
  }

  render() {
    const activeMenuIndex = -1;
    return (
      <View style={style.container}>
        <View style={style.menuListContainer}>
          {menuData.map((m, index) =>
            <TouchableOpacity activeOpacity={0.8} key={index}
                              onPress={() => this.routeToScreen(m.linkTo)}
                              style={[style.menuListItem, activeMenuIndex == index ? style.menuListItemSelected : null]}>
              <Text uppercase={false}
                    style={[style.menuListItemText, activeMenuIndex == index ? style.menuListItemTextSelected : null]}>{m.title}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }

  componentWillUnmount() {
  }
}

const avatarSize = NativeHelper.ViewportWidth * .3;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInforContainer: {
    flex: 2.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray,
    alignSelf: 'stretch',
  },
  menuListContainer: {
    flex: 7.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  menuListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  menuListItemSelected: {
    backgroundColor: Colors.Blue,
  },
  menuListItemIcon: {
    width: 30,
    height: 30,
    tintColor: Colors.Gray,
  },
  menuListItemIconSelected: {
    tintColor: Colors.White,
  },
  menuListItemText: {
    fontSize: 18,
    color: Colors.Gray,
    marginLeft: 10
  },
  menuListItemTextSelected: {
    color: Colors.White,
  },
  userAvatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    resizeMode: 'cover',
  },
  userText: {
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  }
});
