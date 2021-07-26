import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Theme from '../utils/Theme';
import {Card} from 'react-native-paper';
export default class MyGroupSessionsComponent extends Component {
  render() {
    return (
      <Card style={styles.container} elevation={2}>
        <View style={styles.firstGroup}>
          <View style={styles.leftCol}>
            <Text style={styles.headingText}>Age group</Text>
            <Text style={styles.subHeadingText}>Adult (18+)</Text>
          </View>
          <View style={styles.rightCol}>
            <Text style={styles.headingNextText}>Cancellation type </Text>
            <Text style={styles.subHeadingText}>Mlid</Text>
          </View>
        </View>
        <Text style={styles.subjectText}>Subject</Text>
        <Text style={styles.bmbsText}>Bussnise managment Bussnise studies</Text>

        <View style={styles.ndGroup}>
          <Text style={styles.headingText}>Fri,2 Apr</Text>
          <Text style={styles.headingNextText}>Group strength </Text>
        </View>
        <View style={styles.ndGroup}>
          <Text style={styles.subHeadingText}>10:00 - 13:00</Text>
          <Text>{'                  '}</Text>
          <Text style={styles.personText}>5 person</Text>

          <Text style={styles.headingText}>$ 8.75 / person</Text>
        </View>

        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnText}>Choose</Text>
        </TouchableOpacity>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.shadowColor,
    borderRadius: 10,
    borderRadius: 5,
    margin: 10,
    paddingVertical: Theme.hp('1'),
  },
  headingText: {
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
  },
  subHeadingText: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    color: Theme.black,
    marginTop: 3,
  },
  btnText: {
    fontSize: 16,
    fontFamily: Theme.fontFamilyBold,
    textAlign: 'center',
    color: Theme.white,
  },
  btnStyle: {
    backgroundColor: Theme.primary,
    width: Theme.wp('22%'),
    paddingVertical: Theme.hp('1.2'),
    borderRadius: 7,
    alignSelf: 'flex-end',
    margin: 5,
    marginRight: Theme.wp('7'),
  },
  itemView: {
    flexDirection: 'row',
  },
  headingNextText: {
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
  },
  firstGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: Theme.wp('3%'),
    marginRight: Theme.wp('30%'),
  },
  ndGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: Theme.wp('3%'),
    marginRight: Theme.wp('34%'),
  },
  personText: {
    marginRight: Theme.wp('14%'),
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    color: Theme.black,
  },
  subjectText: {
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
    marginLeft: Theme.wp('3'),
    marginTop: 5,
  },
  bmbsText: {
    fontSize: 16,
    fontFamily: Theme.fontFamily,
    color: Theme.black,
    marginLeft: Theme.wp('3'),
    marginBottom: 10,
  },
});
