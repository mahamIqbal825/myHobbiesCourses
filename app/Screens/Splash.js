import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import SplashImg from '../assets/Images/Splash.png';
export default class Splash extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/icons/logo.png')}
        />
        <Text style={styles.textBold}>My Hobby Courses</Text>

        <TouchableOpacity
          style={styles.btnBg}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Lets Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: Theme.wp('%100'),
    // height: Theme.hp('%100'),
    flex: 1,
    backgroundColor: Theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  textBold: {
    color: Theme.white,
    fontFamily: Theme.fontFamilyBold,
    fontSize: 24,
    marginTop: '4%',
  },
  btnBg: {
    backgroundColor: Theme.white,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 9,
    position: 'absolute',
    bottom: 55,
  },
  btnText: {
    color: Theme.headingColor,
    fontFamily: Theme.fontFamilyBold,
    fontSize: 20,
  },
});
