import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import Theme from '../../utils/Theme';

const TextComponent = ({
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
        backgroundColor: '#F4F5F7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Theme.hp('3%'),
        borderRadius: 10,
      }}>
      <TextInput
        value={value}
        style={{
          flex: 1,
          height: Theme.hp('7%'),
          fontSize: Theme.wp('3%'),
          backgroundColor: '#F4F5F7',
          paddingLeft: 10,
          fontSize: 15,
          color: 'black',
          borderRadius: 10,
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
          marginRight: Theme.wp('4%'),
        }}
      />
    </View>
  );
};
export default TextComponent;
