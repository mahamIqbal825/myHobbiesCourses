import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import Theme from '../../utils/Theme';

const SigninTextComponent = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  image,
  source,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: 'grey',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 5,
        elevation: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 4,
      }}>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        style={{
          flex: 1,
          height: Theme.hp('7%'),
          fontSize: Theme.wp('3%'),
          backgroundColor: '#fff',
          paddingLeft: 10,
          fontSize: 15,
          color: Theme.fontColor,
          borderRadius: 10,
          fontFamily: Theme.fontFamily,
        }}
        placeholder={placeholder}
        placeholderTextColor="#7A869A"
        onChangeText={onChangeText}
      />
      <Image
        source={source}
        style={{
          height: 20,
          width: 20,
          resizeMode: 'stretch',
          marginRight: Theme.wp('4%'),
        }}
      />
    </View>
  );
};
export default SigninTextComponent;
