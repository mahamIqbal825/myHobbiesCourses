import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Theme from '../../utils/Theme';
import Images from '../../constants/Images';

const Header = ({text, source, navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}>
        <Image source={Images.leftArrow} style={styles.arrowImage} />
      </TouchableOpacity>
      <Text style={styles.bankTransfer}>{text}</Text>
      <Image source={source} style={styles.crossImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowImage: {height: 18, width: 18, justifyContent: 'center'},
  bankTransfer: {
    fontSize: 18,

    fontFamily: Theme.fontFamily,
    flex: 1,
    marginLeft: '15%',
  },
  crossImage: {
    height: 30,
    width: 30,

    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '6%',
  },
});

export default Header;
