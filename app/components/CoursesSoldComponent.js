import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Card} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import Icons from '../constants/Icons';
import Language from '../utils/Language';
import Theme from '../utils/Theme';
export default class CoursesSoldComponent extends Component {
  render() {
    return (
      <Card style={styles.cardContainer} elevation={1.5}>
        <View style={styles.collegeName}>
          <Image source={Icons.manIcon} style={styles.iconTutor} />
          <Text style={styles.heading} numberOfLines={10}>
            {Language.collegeName}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.createText}>Created Sep 15, 2016 20:53</Text>
          <View>
            <Text style={styles.courseOnSellText}>{Language.courseOnSell}</Text>
            <Text style={styles.orderText}>{Language.order}</Text>
            <View style={styles.orderView}>
              <Text style={styles.orderText}>
                317{' '}
                <Text style={{...styles.orderText, color: 'red'}}>
                  {Language.status}
                </Text>
              </Text>
              <Image source={Icons.infoGreen} style={styles.infoIcon} />
            </View>

            <View>
              <Text></Text>
            </View>
          </View>
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
    marginBottom: Theme.hp('1%'),
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

  infoIcon: {
    width: Theme.wp('6'),
    height: Theme.hp('3.2'),
    marginRight: Theme.wp('3'),
  },

  createText: {
    fontSize: 18,
    fontFamily: Theme.fontFamily,
  },
  courseOnSellText: {
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
    marginVertical: Theme.hp('1.5%'),
  },
  orderText: {
    fontSize: 17,
    fontFamily: Theme.fontFamily,
  },
  detailsContainer: {
    width: Theme.wp('83%'),
    alignSelf: 'center',
  },
  orderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
