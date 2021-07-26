import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import Images from '../../constants/Images';
import ButtonComponent from '../../shared/components/Button';
import Header from '../../shared/components/Header';
import SigninTextComponent from '../../shared/components/SigninTextComponent';

export default class CardSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: '',
      setChecked: '',
      city: '',
      adress1: '',
      adress2: '',
      fname: '',
      lname: '',
      code: '',
    };
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Header
            text="Please confirm details to place an order"
            source={Images.layerCross}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label1}>First Name</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Jasmeen James"
              value={this.state.fname}
              onChangeText={fname => this.setState({fname})}
            />
          </View>

          <Text style={styles.label}>last Name</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Jasmeen James"
              value={this.state.lname}
              onChangeText={lname => this.setState({lname})}
            />
          </View>

          <Text style={styles.label}>Address 1</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Trafalgar Sq. 1"
              value={this.state.adress1}
              onChangeText={adress1 => this.setState({adress1})}
            />
          </View>

          <Text style={styles.label}>Address 2</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Scotland  Yard"
              value={this.state.adress2}
              onChangeText={adress2 => this.setState({adress2})}
            />
          </View>

          <Text style={styles.label}>City</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="London"
              value={this.state.city}
              onChangeText={city => this.setState({city})}
            />
          </View>

          <Text style={styles.label}>Postal Code</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Scotland Yard"
              value={this.state.code}
              onChangeText={code => this.setState({code})}
            />
          </View>
          <ButtonComponent text="Continue" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Theme.backgroundColor,
  },
  scroll: {
    backgroundColor: Theme.backgroundColor,
  },
  label1: {
    color: '#919191',
    marginLeft: '3.4%',
    fontFamily: Theme.fontFamily,
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
  inputContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
