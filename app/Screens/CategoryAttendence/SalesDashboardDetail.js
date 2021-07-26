import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default class SalesDashboardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salesReview: [
        {
          image: Icons.myClassesIcon,
          title: 'My classes',
          freq: '121',
        },
        {
          image: Icons.bookingIcon,
          title: 'Booking',
          freq: '13',
        },
        {
          image: Icons.reviewIcon,
          title: 'Reviews',
          freq: '20',
        },
      ],
    };
  }
  render() {
    const {salesReview} = this.state;
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerWrap}>
          <Image source={Icons.backIcon} style={styles.IconBack} />
          <Text style={styles.txtHeaderTit}>Sales dashboard</Text>
        </View>
        <ScrollView>
          <View style={styles.widthSet}>
            <View style={styles.subHeaderWrap}>
              <Text style={{...styles.txtHeaderTit, fontSize: 20}}>
                Listing Statistics
              </Text>
              <Image source={Icons.rankIcon} style={styles.IconBack} />
            </View>
            <Image
              source={Images.analytics}
              style={styles.imgAnalytics}
              resizeMode="cover"
            />
            <FlatList
              data={salesReview}
              keyExtractor={(item, index) => item.title}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <Image source={item.image} style={styles.imgIcon} />
                    <Card elevation={5} style={styles.btnWrap}>
                      <Text style={styles.txtTitle}>{item.title}</Text>
                      <Text style={{...styles.txtTitle, right: 70}}>
                        {item.freq}
                      </Text>
                    </Card>
                  </View>
                );
              }}
            />
            <Text style={styles.txtTotalRev}>Total Revenue</Text>
            <View style={styles.wrapRevinue}>
              <Text style={styles.txtEuro}>£900</Text>
              <Image source={Images.personeImg} style={styles.imgPerson} />
            </View>
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
  txtTotalRev: {
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 20,
  },
  txtEuro: {
    color: Theme.accent,
    fontSize: 30,
  },
  wrapRevinue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    paddingTop: 20,
  },
  wrapImgIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imgPerson: {
    height: 170,
    width: 170,
  },
  imgIcon: {width: 30, height: 30, marginTop: 20},
  txtTitle: {
    fontSize: 16,
    color: Theme.black,
    fontWeight: 'bold',
    top: '20%',
  },
  btnWrap: {
    backgroundColor: Theme.white,
    width: '99%',
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    bottom: 5,
  },
  imgAnalytics: {width: '85%', height: 140, marginTop: 20},
  subHeaderWrap: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    paddingTop: 20,
  },
  widthSet: {
    width: '90%',
    alignSelf: 'center',
  },
  txtHeaderTit: {
    color: Theme.fontColor,
    fontSize: 20,
  },
  headerWrap: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  IconBack: {
    width: 20,
    height: 20,
  },
});
