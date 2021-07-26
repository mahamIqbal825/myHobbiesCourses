import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Card} from 'react-native-paper';
import Icons from '../constants/Icons';
import Language from '../utils/Language';
import Theme from '../utils/Theme';
export default class CourceAttendeceListingComponent extends Component {
  render() {
    return (
      <Card style={styles.cardContainer} elevation={1.5}>
        <View style={styles.collegeName}>
          <Image source={Icons.manIcon} style={styles.iconTutor} />
          <Text style={styles.heading} numberOfLines={10}>
            {Language.collegeName}
          </Text>
        </View>
        <View style={styles.tutorNameLocation}>
          <Text style={styles.subHeading}>
            {Language.tutor}
            {Language.tutorName}
          </Text>
          <Text
            style={{
              ...styles.batchText,
              fontFamily: Theme.fontFamily,
              color: Theme.black,
              fontSize: 18,
            }}>
            {' '}
            {Language.location} London
          </Text>
        </View>
        <View style={styles.detailsItems}>
          <Text style={styles.detailsText}>
            {Language.startDate}
            30-Nov-2016
          </Text>
          <Text style={styles.detailsText}>{Language.endDate} 30-Jan-2017</Text>
        </View>
        <View style={styles.detailsItems}>
          <Text style={styles.detailsText}>
            {Language.price}
            <Text style={styles.priceText}>$100.00</Text>
          </Text>
          <Text style={styles.detailsText}>{Language.endDate} 30-Jan-2017</Text>
        </View>
        <View style={styles.batchView}>
          <Text style={styles.detailsText}>
            {Language.sessions}
            <Text style={{...styles.priceText, color: Theme.black}}>25</Text>
          </Text>
          <Text style={styles.batchText}>Batch size: 25</Text>
          <Image source={Icons.infoIcons} style={styles.infoIcon} />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 14,
    marginTop: 15,
    backgroundColor: Theme.backgroundColor,
    marginHorizontal: Theme.wp('4%'),
    borderColor: Theme.white,
    marginBottom: Theme.hp('2%'),
  },
  collegeName: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Theme.wp('92%'),
    alignSelf: 'center',
  },
  iconTutor: {
    width: Theme.wp('25'),
    height: Theme.hp('13'),
    margin: Theme.hp('2'),
    alignSelf: 'center',
  },
  tutorNameLocation: {
    flexDirection: 'row',
    width: Theme.wp('84%'),
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: 22,
    fontFamily: Theme.fontFamily,
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center',
  },
  subHeading: {
    fontFamily: Theme.fontFamily,
    color: Theme.black,
    fontSize: 18,
  },
  detailsText: {
    fontFamily: Theme.fontFamily,
    color: Theme.grey,
    fontSize: 17,
    textAlign: 'center',
  },
  detailsItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Theme.wp('84%'),
    alignSelf: 'center',
    marginTop: '0.5%',
  },
  priceText: {
    color: 'red',
    fontSize: 14,
  },
  batchView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: Theme.wp('84%'),
    alignSelf: 'center',
    marginTop: Theme.wp('0.5%'),
  },
  batchText: {
    fontFamily: Theme.fontFamily,
    color: Theme.grey,
    fontSize: 17,
    textAlign: 'center',
    marginLeft: Theme.wp('18'),
  },
  infoIcon: {
    width: Theme.wp('6'),
    height: Theme.hp('3.2'),
    margin: Theme.wp('1'),
    marginLeft: Theme.wp('4'),
    marginBottom: Theme.wp('2'),
  },
});
