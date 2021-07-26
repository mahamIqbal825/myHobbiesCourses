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
  lightText,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <Card style={styles.mycard}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
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
          <Text style={styles.lightText}>{lightText}</Text>
        </View>
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
    shadowRadius: 10.0,
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
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '5%',
  },
  img: {
    width: '60%',
    height: '60%',
  },
  myInput: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 16,
    flex: 1,
  },
  lightText: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 16,
    color: Theme.textColor,
  },
});

export default ProfileInput;
