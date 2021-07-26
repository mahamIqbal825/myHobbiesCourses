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

const ProfileComponent = ({text, name, icon}) => {
  return (
    <Card style={styles.mycard}>
      <View style={styles.container}>
        <View style={styles.imgBg}>
          <Image style={styles.img} source={icon} />
        </View>
        <Text style={styles.MyText}>{name}</Text>
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
    borderRadius: 15,
    marginVertical: 8,
  },
  container: {
    backgroundColor: Theme.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
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
  MyText: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 16,
    color: Theme.headingColor,
  },
});

export default ProfileComponent;
