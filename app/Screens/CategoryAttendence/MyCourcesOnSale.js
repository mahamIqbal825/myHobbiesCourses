import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../../constants/Images';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';
import {Card} from 'react-native-paper';

export default class MyCourcesOnSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      items: [
        {
          tittle: '1- Dance',
          profileImage: Images.profile,
          name: 'STUDENT NAME',
          desc1: 'Mary Ward Centre:',
          desc2: 'Balroom Dance',
          desc3: 'JaipurSeller',
          locationName: 'London',
          locationIcon: Images.location,
          timeIcon: Images.time,
          dateIcon: Images.date,
          time: 'Uploaded - 1 Month 2 Weeks a..',
          personIcon: Images.user,
          personValue: '28',
          arrowIcon: Images.leftArrow,
          date: 'Thuesday, 14:00 03-Jan-2017',
        },
        {
          tittle: '2- Art&Craft',

          profileImage: Images.profile,
          name: 'STUDENT NAME',
          desc1: 'Mary Ward Centre:',
          desc2: 'Balroom Dance',
          desc3: 'JaipurSeller',
          locationName: 'London',
          locationIcon: Images.location,
          timeIcon: Images.time,
          dateIcon: Images.date,
          time: 'Uploaded - 1 Month 2 Weeks a..',
          personIcon: Images.user,
          personValue: '28',
          arrowIcon: Images.leftArrow,
          date: 'Thuesday, 14:00 03-Jan-2017',
        },
        {
          tittle: '3- Dance',

          profileImage: Images.profile,
          name: 'STUDENT NAME',
          desc1: 'Mary Ward Centre:',
          desc2: 'Balroom Dance',
          desc3: 'JaipurSeller',
          locationName: 'London',
          locationIcon: Images.location,
          timeIcon: Images.time,
          dateIcon: Images.date,
          time: 'Uploaded - 1 Month 2 Weeks a..',
          personIcon: Images.user,
          personValue: '28',
          arrowIcon: Images.leftArrow,
          date: 'Thuesday, 14:00 03-Jan-2017',
        },
      ],
    };
  }
  render() {
    const {items} = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Header
            navigation={this.props.navigation}
            text="My Courses On Sale"
          />

          <FlatList
            data={items}
            style={{marginTop: 10}}
            renderItem={({item, index}) => {
              return (
                <View>
                  <Text style={styles.label}>{item.tittle}</Text>

                  <Card elevation={5} style={styles.card}>
                    <View style={styles.rowContainer}>
                      <Image source={item.profileImage} style={styles.image} />
                      <View style={styles.cardView}>
                        <Text style={styles.stuName}>{item.name}</Text>
                        <Text style={styles.des}>{item.desc1}</Text>
                        <Text style={styles.des}>{item.desc2}</Text>
                        <Text style={styles.des}>{item.desc3}</Text>
                        <View style={styles.iconContainer}>
                          <Image
                            source={item.locationIcon}
                            style={styles.icon}
                          />
                          <Text style={styles.iconText}>
                            {item.locationName}{' '}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.iconFlexContainer}>
                      <View style={styles.rowIcon}>
                        <Image source={item.timeIcon} style={styles.icon} />
                        <Text style={styles.iconText}>{item.time}</Text>
                      </View>
                      <View style={styles.rowIconUser}>
                        <Image source={item.personIcon} style={styles.icon} />
                        <Text style={styles.iconText}>{item.personValue}</Text>
                      </View>
                    </View>
                    <View style={styles.iconFlexContainer}>
                      <View style={styles.rowIcon}>
                        <Image source={item.dateIcon} style={styles.icon} />
                        <Text style={styles.iconText}>{item.date}</Text>
                      </View>
                      <View>
                        <Image
                          source={item.arrowIcon}
                          style={styles.arrowicon}
                        />
                      </View>
                    </View>
                  </Card>
                </View>
              );
            }}
          />
          <View style={styles.authContainer}>
            <TouchableOpacity>
              <View style={styles.signinContainer}>
                <Text style={styles.signinAuthText}>Edit </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpAuthText}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image source={Images.rightArrow} style={styles.arrow} />
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
  label: {
    marginTop: Theme.hp('3%'),
    fontSize: 18,
    fontFamily: Theme.fontFamilyBold,
  },
  card: {
    padding: 10,
    marginTop: Theme.hp('3%'),
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  stuName: {
    fontSize: 15,
    color: Theme.accent,
    fontFamily: Theme.fontFamily,
    marginLeft: Theme.wp('2%'),
  },
  des: {
    marginLeft: Theme.wp('2%'),
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor,
  },
  iconText: {
    marginLeft: Theme.wp('2%'),
    fontFamily: Theme.fontFamily,
    fontSize: 15,
    textAlign: 'justify',
    color: Theme.fontColor,
  },
  icon: {
    width: 26,
    height: 22,
  },
  arrowicon: {
    width: 26,
    height: 22,
    right: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: Theme.wp('2%'),
    marginTop: Theme.hp('1s%'),
  },
  iconFlexContainer: {
    flexDirection: 'row',
    marginTop: Theme.hp('3%'),
    justifyContent: 'space-between',
  },
  rowIcon: {
    flexDirection: 'row',
    width: Theme.wp('40%'),
  },
  rowIconUser: {
    flexDirection: 'row',
    width: Theme.wp('50%'),
    marginLeft: Theme.wp('10%'),
  },
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: Theme.hp('3%'),
  },
  signinContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: Theme.wp('25%'),
    borderColor: Theme.chip,
    borderRadius: 1,
    borderWidth: 0.1,
    marginRight: Theme.wp('3%'),
  },
  signUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.deleteBtn,
    padding: 5,

    width: Theme.wp('25%'),
    borderRadius: 5,
  },
  signinAuthText: {
    fontSize: 15,
  },
  signUpAuthText: {
    color: Theme.white,
    fontSize: 15,
  },
  arrow: {
    height: 30,
    width: 30,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: Theme.wp('10%'),
    marginTop: Theme.hp('3%'),
  },
});
