import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import ButtonComponent from '../../shared/components/Button';
import Theme from '../../utils/Theme';

export default class BillPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'visa',
    };
  }
  render() {
    const {selected} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={Icons.manu_bar} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Select Payment Method</Text>
          <View />
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.cardItem}>
            <Image source={Images.paypalCard} style={styles.card} />
            <TouchableOpacity
              onPress={() => this.setState({selected: 'paypal'})}>
              <Image
                source={
                  selected == 'paypal' ? Images.checked : Images.unchecked
                }
                style={styles.checkedIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardItem}>
            <Image source={Images.visaCard} style={styles.card} />
            <TouchableOpacity onPress={() => this.setState({selected: 'visa'})}>
              <Image
                source={selected == 'visa' ? Images.checked : Images.unchecked}
                style={styles.checkedIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnView}>
          <ButtonComponent
            text="Continue"
            onPress={() => navigation.navigate('MainHomeScreen')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
    paddingTop: '5%',
  },
  header: {
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '10%',
  },
  title: {
    fontSize: 18,
    fontFamily: Theme.fontFamilySemiBold,
    marginLeft: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  btnView: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '15%',
  },
  card: {
    width: '80%',
    height: 150,
  },
  cardsContainer: {
    width: '100%',
    paddingLeft: '7%',
    paddingRight: '10%',
    marginTop: '10%',
  },
  checkedIcon: {
    width: 40,
    height: 40,
  },
  cardItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
});
