import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Header from '../../shared/components/Header';
import Theme from '../../utils/Theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Images from '../../constants/Images';
import ButtonComponent from '../../shared/components/Button';
import {Card} from 'react-native-paper';
import SigninTextComponent from '../../shared/components/SigninTextComponent';

export default class ShowCourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      items: [
        {
          order: '1168',
          price: '£50.00 ',
          status: 'Complete',
          date: '10/10/1950',
        },
        {
          order: '1168',
          price: '£50.00 ',
          status: 'Complete',
          date: '10/10/1950',
        },
        {
          order: '1168',
          price: '£50.00 ',
          status: 'Complete',
          date: '10/10/1950',
        },
        {
          order: '1168',
          price: '£50.00 ',
          status: 'Complete',
          date: '10/10/1950',
        },
        {
          order: '1168',
          price: '£50.00 ',
          status: 'Complete',
          date: '10/10/1950',
        },
        {
          order: '1168',
          price: '£50.00 ',
          status: 'Complete',
          date: '10/10/1950',
        },
        {
          order: '1168',
          price: '£50.00 ',
          status: 'Complete',
          date: '10/10/1950',
        },
        {
          order: '1168',
          price: '£50.00 ',
          status: 'Complete',
          date: '10/10/1950',
        },
      ],
    };
  }
  render() {
    const {items} = this.state;

    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <Header text="Show Course Details" source={Images.layerCross} />
        </View>
        <View style={styles.tableView}>
          <View style={styles.titleRow}>
            <Text style={styles.titleText}>Order</Text>
            <Text style={styles.titleText}>Price</Text>
            <Text style={styles.titleText}>Status</Text>
            <Text style={styles.titleText}>Date</Text>
          </View>
          <FlatList
            data={items}
            style={{marginTop: 10}}
            renderItem={({item, index}) => {
              return (
                <View style={styles.titleRow}>
                  <Text style={styles.dataText}>{item.order}</Text>
                  <Text style={styles.dataText}>{item.price}</Text>
                  <View style={{paddingTop: '3%'}}>
                    <Text style={styles.dataText}>{item.status}</Text>
                    <Icon
                      name="caretdown"
                      size={12}
                      style={styles.iconView}
                      color={Theme.fontColorLight}
                    />
                  </View>
                  <Text style={styles.dataText}>{item.date}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.greenContainer}>
          <View>
            <Image source={Images.round} style={styles.roundImage} />
          </View>
          <View style={styles.secondContainer}>
            <Text style={styles.orderText}>Order Details</Text>
            <View style={styles.activityName}>
              <Text style={styles.contentText}>Activity Name:</Text>
              <Text style={styles.contentText}> Camdentuator</Text>
            </View>
            <Text style={styles.contentText}>offers Makeup 27 April</Text>
            <Text style={styles.contentText}> 08:30</Text>

            <View style={styles.activityName}>
              <Text style={styles.contentText}>Start Date:</Text>
              <Text style={styles.contentText}> 23-06-2017</Text>
            </View>
            <View style={styles.activityName}>
              <Text style={styles.contentText}>End Date:</Text>
              <Text style={styles.contentText}> 23-06-2017</Text>
            </View>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Show Timming</Text>
            </View>
          </View>
        </View>
        <View style={styles.duration}>
          <Text>itinerary</Text>
          <View style={styles.rowDuration}>
            <Text>Duration:</Text>
            <Text>3days</Text>
          </View>
        </View>
        <View style={styles.dayContainer}>
          <View style={styles.day}>
            <Text style={styles.dayText}>-First Day</Text>
            <Text style={styles.dateText}> (06:00-12:00)</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.pixels} style={styles.pixelImage} />
            <View style={styles.descText}>
              <Text>Stress Stays at the surface white diving</Text>
              <Text style={styles.seeDetails}>See Details</Text>
            </View>
          </View>
        </View>

        <View style={styles.dayContainer}>
          <View style={styles.day}>
            <Text style={styles.dayText}>-Second Day</Text>
            <Text style={styles.dateText}> (06:00-12:00)</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.pixels} style={styles.pixelImage} />
            <View style={styles.descText}>
              <Text>Stress Stays at the surface white diving</Text>
              <Text style={styles.seeDetails}>See Details</Text>
            </View>
          </View>
        </View>

        <View style={styles.dayContainer}>
          <View style={styles.day}>
            <Text style={styles.dayText}>-Third Day</Text>
            <Text style={styles.dateText}> (06:00-12:00)</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.pixels} style={styles.pixelImage} />
            <View style={styles.descText}>
              <Text>You ‘ll surely see the best view here</Text>
              <Text style={styles.seeDetails}>See Details</Text>
            </View>
          </View>
        </View>
        <View style={styles.paymentView}>
          <Text style={styles.paymentTitle}>Payment Details</Text>
          <View>
            <Card elevation={5} style={styles.Card}>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Paid By:</Text>
                <Text style={styles.col1}>Credit Card</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Created:</Text>
                <Text style={styles.col1}>27-Apr-2017 14:01</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Paid:</Text>
                <Text style={styles.col1}>27-Apr-2017 14:01</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Status:</Text>
                <Text style={styles.col1}>Completed</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Order time :</Text>
                <Text style={styles.col1}>18/10/2017 - 10:59 PM </Text>
              </View>
            </Card>
          </View>

          <View>
            <Card elevation={5} style={styles.Card}>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Quentity:</Text>
                <Text style={styles.col1}>1 Unit</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Unite Price:</Text>
                <Text style={styles.col1}>90</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Total Amount::</Text>
                <Text style={styles.col1}>90</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Quentity:</Text>
                <Text style={styles.col1}>1 Unit</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Unite Price:</Text>
                <Text style={styles.col1}>90</Text>
              </View>

              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Total Amount::</Text>
                <Text style={styles.col1}>90</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.col1}>Total Amount::</Text>
                <Text style={styles.col1}>180</Text>
              </View>
              <Text style={styles.totalPrice}>180</Text>
            </Card>
          </View>
          <View style={styles.seller}>
            <Text style={styles.paymentTitle}>Seller Details</Text>
          </View>
          <Text style={styles.label}>User ID</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Thrill1234"
              value={this.state.uid}
              onChangeText={uid => this.setState({uid})}
            />
          </View>

          <Text style={styles.label}>Name</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Thrill Seeker"
              value={this.state.name}
              onChangeText={name => this.setState({name})}
            />
          </View>
          <Text style={styles.label}>Address</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Camden, 30, Jamestown Rd, NW1 7By"
              value={this.state.city}
              onChangeText={city => this.setState({city})}
            />
          </View>
          <Text style={styles.label}>Landline Number</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="020 7485 4343"
              value={this.state.number}
              onChangeText={number => this.setState({number})}
            />
          </View>

          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="07962084079"
              value={this.state.mobile}
              onChangeText={mobile => this.setState({mobile})}
            />
          </View>

          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="Crazywolf181 +camdentutor@gmail.com"
              value={this.state.address}
              onChangeText={address => this.setState({address})}
            />
          </View>
          <Text style={styles.label}>ActivityAddress</Text>
          <View style={styles.inputView}>
            <SigninTextComponent
              placeholder="LONDON , 39 Drury Ln WC2B 5RR"
              value={this.state.code}
              onChangeText={code => this.setState({code})}
            />
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
  tableView: {
    backgroundColor: Theme.tableColor,
    marginBottom: Theme.hp('1%'),
  },
  titleRow: {
    flexDirection: 'row',
    // marginTop: Theme.hp('3%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
  },
  titleText: {
    color: Theme.primary,
    paddingRight: '7%',
    marginTop: Theme.hp('2%'),
  },
  dataText: {
    color: Theme.fontColor,
  },
  iconView: {
    textAlign: 'center',
  },
  greenContainer: {
    backgroundColor: Theme.primary,
    marginTop: Theme.hp('3%'),
    padding: 26,
    flexDirection: 'row',
  },
  roundImage: {
    height: 100,
    width: 100,
    marginTop: Theme.hp('3%'),
  },
  secondContainer: {
    marginLeft: Theme.wp('4%'),
  },
  orderText: {
    fontSize: 20,
    fontFamily: Theme.fontFamily,
    color: Theme.white,
  },
  activityName: {
    flexDirection: 'row',
  },
  btn: {
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: Theme.hp('1%'),
    alignItems: 'center',
    backgroundColor: Theme.white,
    paddingVertical: 12,
    paddingHorizontal: 4,
    width: '100%',
    alignSelf: 'center',
  },
  btnText: {
    color: Theme.primary,
    fontSize: 16,
    fontFamily: Theme.fontFamily,
  },
  contentText: {
    color: Theme.white,
    fontFamily: Theme.fontFamily,
  },
  duration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  rowDuration: {
    flexDirection: 'row',
  },
  day: {
    flexDirection: 'row',
  },
  dayContainer: {
    padding: 20,
  },
  dayText: {
    color: Theme.accent,
    fontFamily: Theme.fontFamily,
  },
  dateText: {
    fontFamily: Theme.fontFamily,
    marginLeft: Theme.wp('2%'),
  },
  pixelImage: {
    width: 130,
    height: 140,
    borderRadius: 10,
    marginTop: Theme.hp('1%'),
  },
  descText: {
    width: Theme.wp('50%'),
    marginLeft: Theme.wp('3%'),
    marginTop: Theme.hp('2%'),
    fontFamily: Theme.fontFamily,
    fontSize: 16,
  },
  seeDetails: {
    color: Theme.accent,
    fontFamily: Theme.fontFamily,
    fontSize: 15,
    marginTop: Theme.hp('2%'),
  },
  paymentTitle: {
    fontSize: 16,
    fontFamily: Theme.fontFamilyBold,
  },
  paymentView: {
    padding: 20,
  },
  Card: {
    padding: 10,
    paddingBottom: Theme.hp('4%'),
    marginTop: Theme.hp('3%'),
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingLeft: Theme.wp('5%'),
    paddingRight: Theme.wp('5%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  col1: {
    marginTop: Theme.hp('1%'),
    fontFamily: Theme.fontFamily,
  },
  totalPrice: {
    textAlign: 'center',
    fontFamily: Theme.fontFamily,
    fontSize: 19,
    marginTop: Theme.hp('3%'),
    color: Theme.accent,
  },
  seller: {
    marginTop: Theme.hp('2%'),
  },
  label: {
    color: Theme.fontColor,
    marginTop: Theme.hp('3%'),
    marginLeft: '2%',
    fontFamily: Theme.fontFamily,
  },
  inputView: {
    marginTop: Theme.hp('1%'),
    justifyContent: 'center',
  },
});
