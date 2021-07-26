import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ButtonComponent from '../../shared/components/Button';
import SigninTextComponent from '../../shared/components/SigninTextComponent';
import Theme from '../../utils/Theme';
import Images from '../../constants/Images';
import Header from '../../shared/components/Header';

export default class BankTransferDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: '',
      setChecked: '',
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor: Theme.backgroundColor}}>
        <View style={styles.mainContainer}>
          <Header text="Bank Transfer" />

          <View style={styles.card}>
            <Image source={Images.paypal} style={styles.cardStyle} />
            <View>
              <Text style={styles.paypal}>PayPal</Text>
              <Text>564 *** **** **784</Text>
            </View>

            <RadioButton
              value="first"
              color={Theme.accent}
              status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
            />
          </View>

          <View style={styles.card}>
            <Image source={Images.visa} style={styles.visa} />
            <View>
              <Text style={styles.paypal}>Visa</Text>
              <Text style={{fontFamily: Theme.fontFamily}}>
                564 *** **** **784
              </Text>
            </View>
            <RadioButton
              value="first"
              color={Theme.accent}
              status={this.state.checked === 'first' ? 'checked' : 'checked'}
              // onPress={() => this.setChecked('first')}
            />
          </View>

          <View style={{marginTop: Theme.hp('3%')}}>
            <Text style={styles.address}>Address</Text>
          </View>

          <Text style={styles.label}>Account Name</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="myhobbycourses.com"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
          </View>

          <Text style={styles.label}>Bank Name</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Barclays Bank"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
          </View>

          <Text style={styles.label}>Sort Code</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="20-56-45"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
          </View>

          <Text style={styles.label}>Account Number</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="RC493-12344-129921j-13"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
          </View>

          <Text style={styles.label}>Unique Reference</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="RC493-12344-129921j-1da223123"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
          </View>
          <ButtonComponent
            text="COMPLETE YOUR BANK TRANSFER"
            onPress={() => navigation.navigate('OrderSuccess')}
          />
          <ButtonComponent text="CANCEL " />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
  bankTransfer: {
    fontSize: 20,
    fontFamily: Theme.fontFamilyBold,
    flex: 1,
    marginLeft: '25%',
  },
  card: {
    marginTop: Theme.hp('3%'),
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    paddingVertical: 14,
  },
  cardStyle: {
    height: 30,
    width: 50,
  },
  visa: {
    height: 18,
    width: 59,
  },
  paypal: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
  },
  address: {
    fontSize: 20,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.fontColor,
  },
  label: {
    color: '#919191',
    marginTop: Theme.hp('3%'),
    marginLeft: '3.4%',
    fontFamily: Theme.fontFamily,
  },
  inputView: {
    marginTop: Theme.hp('1%'),
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8%',
    marginBottom: '6%',
  },
  arrowImage: {height: 20, width: 20, marginLeft: '2%'},
});
