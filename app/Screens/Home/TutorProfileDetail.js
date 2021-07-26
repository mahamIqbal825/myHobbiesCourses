import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-paper';
import Theme from '../../utils/Theme';
import Header from '../../shared/components/Header';
import ProfileComponent from '../../components/ProfileComponent';
import ProfileInput from '../../components/ProfileInput';
import ProfileInputText from '../../components/ProfileInputText';

export default class TutorProfileDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
      gender: '',
      dob: '',
      phone: '',
      verify: '',
      about: '',
      media: '',
      tagline: '',
      video: '',
      website: '',
    };
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
            <Header navigation={this.props.navigation} />
          </View>

          <View style={styles.imgBg}>
            <Image
              style={styles.img}
              source={require('../../assets/Images/TutorProfile.png')}
            />
          </View>
          <Text style={styles.name}>Arthur Debons</Text>
          <Text style={styles.profession}>Professional</Text>
          <View style={styles.ComponentBg}>
            <ProfileComponent
              name="My Profile"
              icon={require('../../assets/icons/user.png')}
            />
            <ProfileInput
              icon={require('../../assets/icons/mail.png')}
              placeholder="jessica.stewart@gmail.com"
              value={this.props.email}
              onChangeText={email => this.setState({email})}
            />
            <ProfileInput
              icon={require('../../assets/icons/user.png')}
              placeholder="First Name"
              value={this.props.fname}
              onChangeText={fname => this.setState({fname})}
            />
            <ProfileInput
              icon={require('../../assets/icons/user.png')}
              placeholder="Last Name"
              value={this.props.lname}
              onChangeText={lname => this.setState({lname})}
            />
            <ProfileInput
              icon={require('../../assets/icons/gender.png')}
              placeholder="gender"
              value={this.props.gender}
              onChangeText={gender => this.setState({gender})}
            />
            <ProfileInputText
              icon={require('../../assets/icons/dob.png')}
              placeholder="Date of birth"
              value={this.props.dob}
              onChangeText={dob => this.setState({dob})}
              lightText="03/12/1969"
            />
            <ProfileInput
              icon={require('../../assets/icons/phone.png')}
              placeholder="+92454444464"
              value={this.props.phone}
              onChangeText={phone => this.setState({phone})}
            />
            <ProfileInputText
              icon={require('../../assets/icons/user.png')}
              lightText="Verify"
              placeholder="gender"
              value={this.props.verify}
              onChangeText={verify => this.setState({verify})}
            />
          </View>
          <Card style={styles.mycard}>
            <View style={styles.boxBg}>
              <TextInput
                style={[styles.myInput, {marginLeft: 10}]}
                placeholder="about me"
                placeholderTextColor={Theme.primary}
                value={this.props.about}
                onChangeText={about => this.setState({about})}
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
              />
              <View style={styles.addNumber}>
                <Text style={styles.add}>Add</Text>
                <Text style={styles.number}>50</Text>
              </View>
            </View>
          </Card>

          <Card style={styles.mycard}>
            <View style={styles.boxBg}>
              <TextInput
                style={[styles.myInput, {marginLeft: 10}]}
                placeholder="Social Media"
                placeholderTextColor={Theme.primary}
                value={this.props.media}
                onChangeText={media => this.setState({media})}
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
              />
              <View style={styles.addNumber}>
                <Text style={styles.add}>Add</Text>
                <Text style={styles.number}>50</Text>
              </View>
            </View>
          </Card>

          <Card style={styles.mycard1}>
            <View style={styles.boxBg1}>
              <Text style={styles.heading}>Tagline</Text>
              <TextInput
                style={styles.myInput}
                placeholder="I'll make dance Easy and fun for you"
                placeholderTextColor={Theme.textColor}
                value={this.props.tagline}
                onChangeText={tagline => this.setState({tagline})}
                multiline={true}
                numberOfLines={3}
              />
            </View>
          </Card>
          <Card style={styles.mycard1}>
            <View style={styles.boxBg1}>
              <Text style={styles.heading}>Video URl</Text>
              <TextInput
                style={styles.myInput}
                placeholder="bobby.ortiz@mail.com"
                placeholderTextColor={Theme.textColor}
                value={this.props.video}
                onChangeText={video => this.setState({video})}
                multiline={true}
                numberOfLines={3}
              />
            </View>
          </Card>
          <Card style={styles.mycard1}>
            <View style={styles.boxBg1}>
              <Text style={styles.heading}>Website URL</Text>
              <TextInput
                style={styles.myInput}
                placeholder="www.jessica.com"
                placeholderTextColor={Theme.textColor}
                value={this.props.website}
                onChangeText={website => this.setState({website})}
                multiline={true}
                numberOfLines={3}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: Theme.wp('100%'),
    flex: 1,
    backgroundColor: Theme.backgroundColor,
    alignItems: 'center',
  },
  imgBg: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 80,
  },
  name: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 18,
    color: Theme.headingColor,
  },
  profession: {
    fontFamily: Theme.fontFamily,
    fontSize: 16,
    color: Theme.textColor,
  },
  ComponentBg: {
    width: Theme.wp('100%'),
    marginTop: '5%',
    paddingHorizontal: '4%',
  },
  mycard: {
    width: '94%',
    shadowColor: Theme.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.0,
    elevation: 5,
    height: 140,
    borderRadius: 15,
    // marginHorizontal: Theme.wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    marginHorizontal: '5%',
    marginVertical: 5,
  },
  boxBg: {
    width: Theme.wp('94%'),
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlignVertical: 'top',
    paddingTop: Theme.hp('1.5%'),
    marginHorizontal: '6%',
  },
  mycard1: {
    elevation: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxBg1: {
    width: Theme.wp('100%'),
    height: 150,
    paddingHorizontal: Theme.wp('5%'),
    borderBottomWidth: 1 / 2,
    borderBottomColor: Theme.grey,
  },
  heading: {
    color: Theme.primary,
    marginTop: '18%',
    fontSize: 17,
    fontFamily: Theme.fontFamilyBold,
  },
  myInput: {
    fontSize: 17,
  },
  addNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Theme.hp('1.5%'),
    position: 'absolute',
    right: 12,
    top: 0,
  },
  add: {
    fontSize: 15,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.headingColor,
  },
  number: {
    fontSize: 15,
    fontFamily: Theme.fontFamilyBold,
    color: Theme.headingColor,
  },
});
