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

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Ionicons
            onPress={() => {
              this.props.navigation.pop();
            }}
            style={{padding: '4%'}}
            name="arrow-back"
            size={25}
            color={Theme.headingColor}
          />
        </View>

        <View style={styles.cardBg}>
          <Card style={styles.card}>
            <View style={styles.headerBg}>
              <View style={styles.imgBg}>
                <Image style={styles.img} source={Images.dp} />
              </View>
            </View>
            <Text style={styles.Name}>Selena Lennis</Text>
            <Text style={styles.email}>magan.evans@gmail.com</Text>
          </Card>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card style={styles.card}>
            <MenuComponent
              icon={require('../../assets/icons/man.png')}
              myText="Personal information"
            />
            <MenuComponent
              icon={require('../../assets/icons/ReferenceIcon.png')}
              myText="References"
            />
            <MenuComponent
              icon={require('../../assets/icons/Qualification.png')}
              myText="Rates, Subjects, Qualifications"
            />
            <MenuComponent
              icon={require('../../assets/icons/SecurityIcon.png')}
              myText="Login & Security"
            />
            <MenuComponent
              icon={require('../../assets/icons/Group.png')}
              myText="Group Tuitions"
            />
          </Card>

          <Card style={styles.card}>
            <Text style={styles.heading}>Dashboard</Text>
            <MenuComponent
              icon={require('../../assets/icons/Booking.png')}
              myText="Confirm Booking"
            />
            <MenuComponent
              icon={require('../../assets/icons/information.png')}
              myText="Personal Information"
            />
            <MenuComponent
              icon={require('../../assets/icons/Sales.png')}
              myText="Sales Dashboard & Bookings"
            />
            <MenuComponent
              icon={require('../../assets/icons/man.png')}
              myText="Attendance"
            />
            <MenuComponent
              icon={require('../../assets/icons/publish.png')}
              myText="Publish Online Course"
            />
            <MenuComponent
              icon={require('../../assets/icons/publishOffline.png')}
              myText="Publish Offline Course"
            />
            <MenuComponent
              icon={require('../../assets/icons/Review.png')}
              myText="My Course Reviews"
            />
            <MenuComponent
              icon={require('../../assets/icons/cart.png')}
              myText="Cart"
            />

            <Text style={styles.heading}>Others</Text>
            <MenuComponent
              icon={require('../../assets/icons/blog.png')}
              myText="My Blog"
            />
            <MenuComponent
              icon={require('../../assets/icons/discount.png')}
              myText="My Discounts"
            />
            <MenuComponent
              icon={require('../../assets/icons/tutor.png')}
              myText="My Tutors"
            />
            <MenuComponent
              icon={require('../../assets/icons/myLocation.png')}
              myText="My Locations"
            />
            <MenuComponent
              icon={require('../../assets/icons/addFriend.png')}
              myText="Invite Friends"
            />
            <MenuComponent
              icon={require('../../assets/icons/invitedFriend.png')}
              myText="My Invite Friend"
            />
            <MenuComponent
              icon={require('../../assets/icons/notification.png')}
              myText="Notifications"
            />
            <Text style={styles.heading}>LEGAl</Text>
            <MenuComponent
              icon={require('../../assets/icons/faq.png')}
              myText=" FAQ's"
            />
            <MenuComponent
              icon={require('../../assets/icons/help.png')}
              myText="Get help"
            />
            <MenuComponent
              icon={require('../../assets/icons/feedback.png')}
              myText="Give us feedback"
            />
            <Text style={styles.heading}>Support</Text>
            <MenuComponent
              icon={require('../../assets/icons/faq.png')}
              myText="Terms-Services"
            />
            <MenuComponent
              icon={require('../../assets/icons/help.png')}
              myText="Privacy Setting"
            />
            <MenuComponent
              icon={require('../../assets/icons/logOut.png')}
              myText="Log Out"
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    height: '25%',
    backgroundColor: Theme.primary,
  },
  cardBg: {
    marginTop: '-24%',
  },
  card: {
    width: '93%',
    alignSelf: 'center',
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 24,
  },
  headerBg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.backgroundColor,
  },
  imgBg: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  Name: {
    fontFamily: Theme.fontFamily,
    fontSize: 22,
    color: Theme.headingColor,
    marginTop: '24%',
    alignSelf: 'center',
  },
  email: {
    fontSize: 15,
    fontFamily: Theme.fontFamily,
    color: Theme.textColor,
    alignSelf: 'center',
    marginVertical: '4%',
  },
  ComponentBg: {
    paddingRight: '1%',
    paddingVertical: '2%',
    marginRight: '5%',
    marginTop: '5%',
  },
  heading: {
    fontSize: 17,
    fontFamily: Theme.fontFamilyBold,
    marginBottom: '5%',
    marginTop: '8%',
    marginLeft: '8%',
  },
});
