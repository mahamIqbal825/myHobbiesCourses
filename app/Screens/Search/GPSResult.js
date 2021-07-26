import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {Card} from 'react-native-paper';
import Images from '../../constants/Images';
import ButtonComponent from '../../shared/components/Button';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';

export default class GPSResult extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Card elevation={5}>
            <View style={styles.searchBtn}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Images.line} style={styles.line} />
                <Text style={styles.searchText}>London</Text>
              </View>
              <Image source={Images.edit} style={styles.edit} />
            </View>
          </Card>
        </View>
        <ImageBackground source={Images.maps} style={styles.backImage}>
          <View style={styles.cardContainer}>
            <Card elevation={6} style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Images.profile} style={styles.pro} />
                <View style={{marginLeft: Theme.wp('2%')}}>
                  <Text style={styles.proTitle}>Dance Styles</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={Images.star} style={styles.star} />
                    <Text style={styles.rating}>4.9-(110)</Text>
                  </View>
                  <Text style={styles.price}>Explore backstreets..</Text>
                  <Text style={styles.price}>$25/person </Text>
                </View>
              </View>
            </Card>
            <View style={styles.errorContainer}>
              <Text style={styles.cityText}>City Lit: Ballet, Contemp..</Text>
              <Image source={Images.error} style={styles.error} />
            </View>
          </View>
        </ImageBackground>
        <Card elevation={7} style={styles.mainCard}>
          <View>
            <View style={styles.card2}>
              <ButtonComponent text="back" />
              <Text style={styles.experiences}>23 experiences</Text>
            </View>
          </View>
        </Card>
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
  line: {
    height: 20,
    width: 20,
    marginLeft: Theme.wp('5%'),
  },
  edit: {
    height: 20,
    width: 20,
    right: 10,
  },
  searchBtn: {
    borderRadius: 10,
    flexDirection: 'row',
    // marginTop: Theme.hp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.white,
    paddingVertical: 16,
    paddingHorizontal: 4,
    width: '100%',
    alignSelf: 'center',
  },
  searchText: {
    marginLeft: Theme.wp('5%'),
    fontSize: 18,
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor,
  },
  backImage: {
    width: '100%',
    height: 600,
  },
  pro: {
    height: 110,
    width: 90,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  card: {
    width: Theme.wp('70%'),
    alignSelf: 'center',
    borderRadius: 10,
  },
  cardContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  star: {
    height: 18,
    width: 18,
  },
  proTitle: {
    fontSize: 17,
    fontFamily: Theme.fontFamilyBold,
  },
  rating: {
    marginLeft: Theme.wp('2%'),
    fontFamily: Theme.fontFamily,
  },
  price: {
    marginTop: Theme.hp('1%'),
    fontFamily: Theme.fontFamily,
  },
  cityText: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 20,
  },
  error: {
    height: 20,
    width: 20,
  },
  errorContainer: {
    marginTop: Theme.hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  card2: {
    width: Theme.wp('60%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainCard: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: Theme.wp('5%'),
    paddingBottom: Theme.hp('2%'),
  },
  experiences: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 20,
    paddingLeft: Theme.wp('3%'),
  },
});
