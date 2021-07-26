import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import ButtonComponent from '../../shared/components/Button';
import Theme from '../../utils/Theme';

export default class CardCheckout extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image source={Images.leftArrow} style={styles.arrowImage} />
          <Text style={styles.bankTransfer}>My Group Sessions</Text>
          <Image source={Icons.greenMenu} style={styles.greenMenu} />
          <Text></Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.mainView}>
            <Text style={styles.reviewText}>Review and Pay</Text>
            <View style={styles.cartItemView}>
              <View style={styles.itemTextView}>
                <Text style={styles.headingText}>Dance</Text>
                <Text style={styles.itemDetailsText}>
                  Thomas Michael Voss : Cha Cha Cha, Samba, Rumba, Paso Doble,
                  Jive, Waltz, Tango, Viennese Waltz, Foxtrot Waltz, Tango,
                  Viennese Waltz, Foxtrot
                </Text>
              </View>
              <Image source={Images.cartItem} style={styles.cartImage} />
            </View>

            <View style={styles.cartItemView}>
              <View style={styles.itemTextView}>
                <Text style={styles.headingText}>Dance</Text>
                <Text style={styles.itemDetailsText}>
                  Thomas Michael Voss : Cha Cha Cha, Samba, Rumba, Paso Doble,
                  Jive, Waltz, Tango, Viennese Waltz, Foxtrot
                </Text>
              </View>
              <Image source={Images.cartItem} style={styles.cartImage} />
            </View>
            <View style={styles.quatityPrice}>
              <Text style={styles.headingText}>$350.00+ 1 neight</Text>
              <Text style={styles.headingText}>$350.00</Text>
            </View>
            <View style={styles.servicesFeeView}>
              <Text style={styles.subHeadingText}>Services fee</Text>
              <Text style={styles.subHeadingText}>$32.00</Text>
            </View>
            <View style={styles.addCouponView}>
              <Text style={styles.headingText}>Add Coupon</Text>
              <Image source={Icons.coupon} style={styles.cartIcon} />
            </View>
            <View style={styles.totalGbpView}>
              <Text style={styles.headingText}>Total GBP</Text>
              <Text style={styles.subHeadingText}>$380.00</Text>
            </View>

            <Text style={styles.headingText}>Cancellation policy: Stric</Text>
            <Text style={styles.subHeadingText}>
              Cancel up to 7 days before your trip and get a 50% refurand after
              that time the reservation is non -refundable .
            </Text>
            <Text style={styles.headingText}>
              I agree to the activity Rules{' '}
              <Text style={{...styles.headingText, color: Theme.premiumBtn}}>
                Cancellation Policy
              </Text>{' '}
              and to the Guest Refund Policy. I also agree to pay the total
              amount show which includes services fee.
            </Text>
          </View>

          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BankTransferDetails')}>
              <View style={styles.btn}>
                <Image source={Icons.cart} style={styles.cartIcon} />
                <Text numberOfLines={1} style={styles.btnText}>
                  CHECKOUT
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: Theme.wp('5%'),
  },
  reviewText: {
    fontSize: 18,
    fontFamily: Theme.fontFamily,
  },
  headingText: {
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
    paddingVertical: Theme.hp('1'),
  },
  subHeadingText: {
    fontSize: 18,
    fontFamily: Theme.fontFamily,
    color: Theme.cartText,
  },
  cartImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  cartIcon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  reviewText: {
    fontSize: 18,
    fontFamily: Theme.fontFamily,
    color: Theme.black,
  },
  cartItemView: {
    flexDirection: 'row',
    marginTop: Theme.hp(3),
  },
  itemTextView: {
    width: Theme.wp('63%'),
  },
  quatityPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Theme.wp(1),
  },
  servicesFeeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Theme.wp(1),
  },
  addCouponView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Theme.hp(2),
    marginHorizontal: Theme.wp(9),
  },
  totalGbpView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDetailsText: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    color: Theme.cartText,
  },
  arrowImage: {
    height: 20,
    width: 20,
    justifyContent: 'center',
  },
  bankTransfer: {
    fontSize: 20,

    fontFamily: Theme.fontFamily,
    flex: 1,
    marginLeft: '25%',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: Theme.wp(5),
    marginTop: '8%',
    marginBottom: '6%',
  },
  greenMenu: {
    height: 18,
    width: 22,
    justifyContent: 'center',
  },
  btnView: {
    width: Theme.wp('80%'),
    alignSelf: 'center',
    marginBottom: 10,
  },
  btn: {
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: Theme.hp('4%'),
    alignItems: 'center',
    backgroundColor: Theme.accent,
    paddingVertical: 12,
    paddingHorizontal: 4,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: Theme.white,
    fontSize: 16,
    fontFamily: Theme.fontFamily,
  },
  cartIcon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginRight: 10,
  },
});
