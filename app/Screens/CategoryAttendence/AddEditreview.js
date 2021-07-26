import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-paper';
import Images from '../../constants/Images';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';
import {Rating} from 'react-native-ratings';
import ButtonComponent from '../../shared/components/Button';

export default class AddEditReview extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Header navigation={this.props.navigation} text="Edit a review" />
          <Card elevation={5} style={styles.card}>
            <View style={styles.rowContainer}>
              <Image source={Images.profile} style={styles.image} />
              <View style={styles.cardView}>
                <Text style={styles.title}>
                  New Castle College - Balroom Dance
                </Text>
                <Rating
                  type="custom"
                  ratingColor={Theme.rating}
                  ratingBackgroundColor={Theme.ratingBackground}
                  ratingCount={5}
                  imageSize={25}
                  onFinishRating={this.ratingCompleted}
                  style={styles.stars}
                />
                <Text style={styles.trip}>How is your trip?</Text>
              </View>
            </View>
            <View style={styles.reviewContainer}>
              <Rating
                type="custom"
                ratingColor={Theme.rating}
                ratingBackgroundColor={Theme.ratingBackground}
                ratingCount={5}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                // style={styles.stars}
              />
              <Text style={styles.rateStar}>
                -Rate a review from 1 to 5 stars
              </Text>
            </View>
            <View style={styles.recomendedContainer}>
              <Text style={styles.recomended}>
                Recomended this course for everyone
              </Text>
              <View style={styles.line}></View>
              <Text style={styles.reviewtext}>
                Through this course i really found myself.I would recomended
                this course to everyone who wants to learn dancing
              </Text>
            </View>
          </Card>
          <TextInput
            placeholder="Additional Comments..."
            multiline={true}
            numberOfLines={5}
            textAlignVertical="top"
            style={styles.textIn}
            fontSize={16}
            placeholderTextColor={Theme.fontColor}
          />
          <Card elevation={6} style={styles.Imagecard}>
            <View style={styles.cardContainer}>
              <View style={styles.imageCard}>
                <Image source={Images.crosBlackBack} style={styles.cro} />
              </View>
              <View style={styles.imageCard}>
                <Image source={Images.crosBlackBack} style={styles.cro} />
              </View>
              <View style={styles.imageCard}>
                <Image source={Images.crosBlackBack} style={styles.cro} />
              </View>
              <View style={styles.imageCard}>
                <Image source={Images.crosBlackBack} style={styles.cro} />
              </View>
            </View>
            <Text style={styles.uploadText}>Upload Photo</Text>
          </Card>
          <View style={styles.rowBtn}>
            <View style={styles.btn}>
              <ButtonComponent text="Cancel" />
            </View>
            <View style={styles.btn}>
              <ButtonComponent isGreen text="Save" />
            </View>
          </View>
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
  image: {
    height: 110,
    width: 110,
    borderRadius: 10,
  },
  card: {
    borderRadius: 15,
    padding: 12,
    marginTop: Theme.hp('3%'),
    paddingBottom: 20,
  },
  Imagecard: {
    borderRadius: 15,
    padding: 12,
    marginTop: Theme.hp('3%'),
    paddingBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  cardView: {
    width: Theme.wp('40%'),
    marginLeft: Theme.wp('4%'),
    fontFamily: Theme.fontFamily,
  },
  title: {
    textAlign: 'justify',
    fontSize: 15,
  },
  stars: {paddingVertical: 10, paddingRight: Theme.wp('5%')},
  trip: {
    fontFamily: Theme.fontFamily,
    fontSize: 16,
    color: Theme.fontColor,
  },
  reviewContainer: {
    flexDirection: 'row',
    marginTop: Theme.hp('2%'),
    width: Theme.wp('50%'),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  rateStar: {
    fontSize: 12,
    fontFamily: Theme.fontFamily,
  },
  recomended: {
    textAlign: 'center',
    fontFamily: Theme.fontFamilyBold,
    fontSize: 15,
  },
  recomendedContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: Theme.hp('1%'),
  },
  line: {
    height: 1,
    backgroundColor: Theme.black,
    marginTop: 4,
  },
  reviewtext: {
    marginTop: Theme.hp('1%'),
    textAlign: 'justify',
    width: Theme.wp('70%'),
  },
  textIn: {
    paddingStart: 10,
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor,
    backgroundColor: Theme.inputText,
    borderRadius: 15,
    marginTop: Theme.hp('3%'),
  },
  imageCard: {
    borderRadius: 10,
    borderColor: Theme.lightGrey,
    borderWidth: 1,
    width: Theme.wp('20%'),
    height: Theme.hp('10%'),
    marginLeft: 3,
  },
  cardContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: Theme.hp('3%'),
  },
  cro: {
    height: 20,
    width: 20,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    top: -7,
    position: 'absolute',
  },
  uploadText: {
    textAlign: 'center',
    fontSize: 19,
    color: Theme.chip,
    fontFamily: Theme.fontFamily,
    margin: Theme.hp('3%'),
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: Theme.wp('40%'),
  },
});
