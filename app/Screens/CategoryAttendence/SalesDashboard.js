import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import CoursesSoldComponent from '../../components/CoursesSoldComponent';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';
import {Card, Searchbar} from 'react-native-paper';
import Icons from '../../constants/Icons';
export default class SalesDashboard extends Component {
  render() {
    // const {search} = this.state;
    return (
      <View style={styles.container}>
        <View style={{marginLeft: 20}}>
          <Header navigation={this.props.navigation} text="My Courses Sold " />
        </View>

        <View style={styles.searchView}>
          <Searchbar
            placeholder="Find a Tutor"
            // onChangeText={search => this.setState({search})}
            // value={search}
            style={styles.searchBar}
            iconColor={Theme.searchIcon}
            placeholderTextColor={Theme.grey}
          />
          <Image source={Icons.burgerIcon} style={styles.burgerIcon} />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{marginBottom: Theme.hp('2%')}}>
          <CoursesSoldComponent />
          <CoursesSoldComponent />
          <CoursesSoldComponent />
          <View style={styles.buyerDetailsView}>
            <Text style={styles.buyerDetailsText}>Buyer Details:</Text>
            <Text></Text>
            <Text></Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
  },
  searchBar: {
    fontFamily: Theme.fontFamily,
    borderRadius: 10,
    marginTop: 10,
    flex: 1,
    backgroundColor: Theme.searchBarBg,
  },
  info: {
    width: Theme.wp('6'),
    height: Theme.hp('3.2'),
    marginLeft: Theme.wp('3'),
    alignSelf: 'center',
  },
  burgerIcon: {
    width: Theme.wp('8'),
    height: Theme.hp('3.1'),
    marginLeft: Theme.wp('5'),
    alignSelf: 'center',
    marginRight: Theme.wp('2'),
    marginTop: Theme.hp('1%'),
  },
  searchView: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: Theme.wp('92%'),
  },
  buyerDetailsView: {
    justifyContent: 'center',
    // width: Theme.wp('90%'),
  },
});
