import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Theme from '../../utils/Theme';
import OTPTextInput from 'react-native-otp-textinput';
import ButtonComponent from '../../shared/components/Button';
import Images from '../../constants/Images';
export default class SmsVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.pop();
          }}>
          <Image style={styles.crossIcon} source={Images.crossBlack} />
        </TouchableOpacity>
        <View style={styles.verification}>
          <Image source={Images.folderIcon} style={styles.folder} />
          <View>
            <Text style={styles.smsText}>SMS Verification</Text>
            <Text style={styles.codeText}>Enter your 5 digit code </Text>
          </View>
          <View></View>
        </View>
        <View style={{marginTop: '10%'}}>
          <OTPTextInput
            ref={e => (this.otpInput = e)}
            color={Theme.black}
            backgroundColor={'#e9e9e9'}
            containerStyle={styles.OTPContainer}
            textInputStyle={styles.OTPCell}
            handleTextChange={this.props.changeOTP}
            inputCount={5}
            keyboardType="phone-pad"
          />
        </View>
        <ButtonComponent
          text="Verify"
          onPress={() => navigation.navigate('DateOfBirth')}
        />
        <View style={styles.sendCode}>
          <Text style={styles.greyText}>Don't receive a code? </Text>
          <TouchableOpacity>
            <Text>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
    padding: 30,
    paddingTop: 5,
  },
  crossIcon: {
    height: 17,
    marginTop: Theme.hp('2%'),
    width: 17,
  },
  folder: {
    height: 20,
    width: 20,
  },
  verification: {
    flexDirection: 'row',
    marginTop: Theme.hp('4%'),
    justifyContent: 'space-between',
  },
  smsText: {
    fontSize: 22,
    textAlign: 'center',
  },
  codeText: {
    textAlign: 'center',
    color: Theme.grey,
  },
  OTPContainer: {
    alignSelf: 'center',
    marginTop: 20,
    height: 70,
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    elevation: 5,
  },
  OTPCell: {
    borderRadius: 10,
    width: Theme.hp('5%'),
    height: Theme.hp('5%'),
    borderBottomWidth: 0.3,
    shadowColor: Theme.white,
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 10,
  },
  sendCode: {
    marginTop: Theme.hp('2%'),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  greyText: {
    color: Theme.chip,
  },
});
