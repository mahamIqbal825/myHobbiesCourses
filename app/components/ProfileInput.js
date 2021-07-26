import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Theme from '../utils/Theme';
import Images from '../constants/Images';
import {Card} from 'react-native-paper';

const ProfileInput = ({
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <Card style={styles.mycard}>
      <View style={styles.container}>
        <View style={styles.imgBg}>
          <Image style={styles.img} source={icon} />
        </View>

        <TextInput
          style={styles.myInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          placeholderTextColor={Theme.headingColor}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  mycard: {
    shadowColor: Theme.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 5.0,
    elevation: 5,
    borderRadius: 11,
    marginVertical: 8,
  },
  container: {
    backgroundColor: Theme.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',
    paddingLeft: '5%',
  },
  imgBg: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Theme.primary,
    marginRight: 16,
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  myInput: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 16,
    flex: 1,
  },
});

export default ProfileInput;
