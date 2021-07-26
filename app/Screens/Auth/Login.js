import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Theme from '../../utils/Theme';
import ButtonComponent from '../../shared/components/Button';
import SigninTextComponent from '../../shared/components/SigninTextComponent';
import Images from '../../constants/Images';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Image source={Images.logo} style={styles.image} />
          <Text style={styles.coursesText}>My Hobby Courses</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              source={require('../../assets/Images/checked.png')}
              placeholder="Email or Phone Number"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
          </View>
          <View style={styles.passwordView}>
            <SigninTextComponent
              source={Images.eyeImage}
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
            <TouchableOpacity
              onPress={() => {
                //navigation.navigate('SalesDashboardDetail')
              }}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnView}>
            <ButtonComponent
              text="Sign In"
              onPress={() => navigation.navigate('Dashboard')}
            />

            <View style={[styles.card, {marginTop: 30}]}>
              <Image source={Images.twitter} style={styles.twitterIcon} />
              <Text style={styles.socialText}>Continue With Twitter</Text>
            </View>
            <View style={styles.card}>
              <Image source={Images.facebook} style={styles.facebookIcon} />
              <Text style={styles.socialText}>Continue With Facebook</Text>
            </View>
            <View style={styles.card}>
              <Image source={Images.google} style={styles.googleIcon} />

              <Text style={styles.socialText}>Continue With Google</Text>
            </View>
            <View style={styles.createAccount}>
              <Text style={{color: Theme.chip, fontFamily: Theme.fontFamily}}>
                Don't Have An Account ?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={{color: Theme.primary}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.agreeText}>
              By tapping Continuous, Create Account or More options, I agree to
              Holiday Activities Terms of service. our{' '}
              <Text
                style={{
                  ...styles.agreeText,
                  fontFamily: Theme.fontFamilyBold,
                  fontSize: 17,
                }}>
                Terms and Privacy Policy .
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: Theme.hp('8%'),
    width: 130,
    height: 43,
  },
  coursesText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: Theme.hp('2%'),
    fontFamily: Theme.fontFamilyBold,
  },
  inputView: {
    marginTop: Theme.hp('4%'),
    justifyContent: 'center',
    padding: 15,
  },
  btnView: {
    justifyContent: 'center',
    padding: 15,
  },
  passwordView: {
    justifyContent: 'center',
    padding: 15,
    paddingBottom: 0,
    paddingTop: 10,
  },
  forgotText: {
    color: Theme.primary,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontSize: 15,
    marginTop: Theme.hp('1%'),
    marginRight: Theme.hp('1%'),
    fontFamily: Theme.fontFamily,
  },
  card: {
    marginTop: Theme.hp('2%'),
    height: Theme.hp('6%'),
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
    elevation: 1,
    flexDirection: 'row',
  },
  createAccount: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: Theme.hp('4%'),
  },
  twitterIcon: {
    width: 20,
    height: 20,
    marginRight: '5%',
  },
  facebookIcon: {
    width: 15,
    height: 28,
    marginRight: '5%',
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginRight: '5%',
  },
  socialText: {
    fontFamily: Theme.fontFamily,
    color: Theme.textColor,
    fontSize: 15,
  },
  agreeText: {
    color: Theme.lightGrey,
    padding: '5%',
    textAlign: 'left',
    fontSize: 16,
    fontFamily: Theme.fontFamily,
  },
});
