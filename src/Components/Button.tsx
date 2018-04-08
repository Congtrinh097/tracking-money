import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from "../common/variables";

interface thisProps {
  onPress: ()  => void,
  title: string
}

const ButtonBordered = (props: thisProps) => {
  return (
    <TouchableOpacity style= {styles.button}
                      onPress={props.onPress}>
     <Text style= {styles.text}>{props.title.toUpperCase() || ''}</Text>
    </TouchableOpacity>
  );
}
export default ButtonBordered;

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: null,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: Colors.White,
    borderWidth: 1,
    borderRadius: 3,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.White,
    alignSelf: 'center'
  }
});


