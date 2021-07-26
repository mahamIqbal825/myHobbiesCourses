import React, {Component} from 'react';
import Theme from '../../utils/Theme';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TextComponent from '../../shared/components/TextInput';
import Images from '../../constants/Images';
import ButtonComponent from '../../shared/components/Button';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phone: '',
    };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.crossIcon} source={Images.cross} />
          <Image source={Images.logo} style={styles.image} />
          <Text></Text>
        </View>
        <Text style={styles.logoText}>What You Want Learn To Day</Text>
        <View style={styles.whiteContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.authContainer}>
              <TouchableOpacity onPress={navigation.goBack}>
                <View style={styles.signinContainer}>
                  <Text style={styles.signinAuthText}>Sign In</Text>
                </View>
              </TouchableOpacity>
              <Text>|</Text>
              <TouchableOpacity>
                <View style={styles.signUpContainer}>
                  <Text style={styles.signUpAuthText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.helloText}>Hello!</Text>
            <Text style={styles.createText}>
              Create An Account To Continue!
            </Text>
            <View style={styles.inputView}>
              <TextComponent
                source={Images.checkIcon}
                placeholder="UserName"
                value={this.state.username}
                onChangeText={username => this.setState({username})}
              />
            </View>
            <View style={styles.inputView}>
              <TextComponent
                source={Images.checkIcon}
                placeholder="Email"
                value={this.state.username}
                onChangeText={email => this.setState({email})}
              />
            </View>
            <View style={styles.inputView}>
              <TextComponent
                source={Images.checkIcon}
                placeholder="Phone Number"
                value={this.state.username}
                onChangeText={phone => this.setState({phone})}
              />
            </View>
            <ButtonComponent
              text="Sign Up"
              onPress={() => navigation.navigate('SmsVerification')}
            />
            <View style={styles.createAccount}>
              <Text style={{color: Theme.chip}}>
                Already Have An Account ?{' '}
              </Text>
              <TouchableOpacity onPress={navigation.goBack}>
                <Text style={{color: Theme.primary}}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  image: {
    width: 130,
    height: 43,
  },
  logoContainer: {
    marginTop: Theme.hp('7%'),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  crossIcon: {
    height: 17,
    width: 17,
  },
  logoText: {
    textAlign: 'center',
    color: Theme.white,
    marginTop: Theme.hp('3%'),
  },
  whiteContainer: {
    backgroundColor: Theme.white,
    flex: 1,
    marginTop: Theme.hp('10%'),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  signinAuthText: {
    fontSize: 15,
  },
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  signinContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: Theme.wp('25%'),
    borderColor: Theme.chip,
    borderRadius: 1,
    borderWidth: 0.1,
  },
  signUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.primary,
    padding: 5,

    width: Theme.wp('25%'),
    borderRadius: 5,
  },
  signUpAuthText: {
    color: Theme.white,
    fontSize: 15,
  },
  helloText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: Theme.hp('3%'),
  },
  createText: {
    color: Theme.fontColorLight,
    textAlign: 'center',
    marginTop: Theme.hp('1%'),
  },
  inputView: {
    justifyContent: 'center',
  },
  createAccount: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: Theme.hp('1%'),
  },
});
