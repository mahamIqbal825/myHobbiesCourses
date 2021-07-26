import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import ButtonComponent from '../../shared/components/Button';
import MenuComponent from '../../shared/components/MenuComponent';
import Theme from '../../utils/Theme';
import Images from '../../constants/Images';
import {color} from 'react-native-reanimated';

export default class OrderSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Successful Booking Appointment</Text>
          <View style={styles.imgBg}>
            <Image
              style={styles.img}
              source={require('../../assets/icons/success.png')}
            />
          </View>

          <Text style={styles.successful}>Order Success</Text>
          <Text style={styles.smallText}>Now you're connect directly </Text>
          <Text style={styles.smallText}>
            with Mr. Anthony. Lets check the detail
          </Text>
          <Text style={styles.smallText}> just wait your service here.</Text>
          <View style={styles.btnBg}>
            <ButtonComponent
              text="Back to Home"
              onPress={() => navigation.navigate('LeisureCategories')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: '10%',
    backgroundColor: Theme.backgroundColor,
    alignItems: 'center',
    paddingBottom: '10%',
  },
  heading: {
    marginVertical: '12%',
    fontFamily: Theme.fontFamily,
    color: Theme.headingColor,
    fontSize: 18,
  },
  imgBg: {
    width: Theme.wp('50%'),
    height: Theme.hp('42%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  successful: {
    marginVertical: '10%',
    fontFamily: Theme.fontFamily,
    fontSize: Theme.btntextSize,
  },
  smallText: {
    fontFamily: Theme.fontFamily,
    color: Theme.textColor,
    fontSize: 15,
  },
  btnBg: {
    width: Theme.wp('80%'),
    marginBottom: '10%',
  },
});
