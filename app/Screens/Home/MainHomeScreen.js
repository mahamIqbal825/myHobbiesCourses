/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import {Card, Searchbar} from 'react-native-paper';
import Icons from '../../constants/Icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Swiper from 'react-native-swiper';

export default class MainHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      cities: [
        {
          name: 'London',
          image: Images.london,
        },
        {
          name: 'Glasgow',
          image: Images.glasgow,
        },
        {
          name: 'Manchester',
          image: Images.manchester,
        },
        {
          name: 'Birmingham',
          image: Images.birmingham,
        },
      ],
      subjects: [
        {
          title: 'Subject Tutions',
          image: Images.subject1,
          des: 'Find online and in-person tutors to meet  your learning needs Subject Tuition. ',
        },
        {
          title: 'Subject Tutions',
          image: Images.subject2,
          des: 'Find online and in-person tutors to meet  your learning needs Subject Tuition.',
        },
      ],
      scienceSubjects: [
        {
          title: 'Science',
          image: Images.science1,
          des: 'Find online and in-person tutors to meet  your learning needs Subject Tuition. ',
        },
        {
          title: 'Science',
          image: Images.science2,
          des: 'Find online and in-person tutors to meet  your learning needs Subject Tuition.',
        },
      ],
      art: [
        {
          title: 'Get Art & Craft Courses From Professionals Trainer.',
          image: Images.art1,
        },
        {
          title: 'Get Art & Craft Courses From Professionals Trainer.',
          image: Images.art2,
        },
      ],
      onlineSubject: [
        {
          title: 'Bronze Verifie',
          image: Images.online1,
          name: 'Kanwal_36',
          price: '66',
          subjectcs: 'Science,Math',
        },
        {
          title: 'Bronze Verifidd',
          image: Images.online2,
          name: 'Kanwal_36',
          price: '66',
          subjectcs: 'Science,Math',
        },
      ],
      sliderData: [
        {
          image: Images.swiper1,
          name: 'Costain James',
          subject: 'Science',
          priec: '8.75',
        },
        {
          image: Images.swiper1,
          name: 'Cosatain James',
          subject: 'Science',
          priec: '8.75',
        },
      ],
    };
  }
  render() {
    const {
      search,
      cities,
      subjects,
      scienceSubjects,
      art,
      onlineSubject,
      sliderData,
    } = this.state;
    const RenderCities = () => {
      return (
        <FlatList
          data={cities}
          numColumns={2}
          keyExtractor={index => index}
          renderItem={({item, index}) => {
            return (
              <Card key={index} style={styles.locationCard}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('SearchByCity')
                  }>
                  <Image source={item.image} style={styles.nearByImage} />
                  <View style={styles.locationCardInner}>
                    <Image
                      source={Icons.locationGreen}
                      style={styles.locationIcon}
                    />
                    <Text
                      style={{
                        ...styles.listHeading,
                        fontSize: 18,
                        paddingBottom: 10,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Card>
            );
          }}
        />
      );
    };

    const RenderSubjects = () => {
      return (
        <FlatList
          data={subjects}
          numColumns={2}
          style={{marginTop: 5}}
          keyExtractor={(item, index) => item.name}
          renderItem={({item, index}) => {
            return (
              <Card
                key={index}
                style={[styles.locationCard, {backgroundColor: '#F4F5F7'}]}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('TutorProfileDetail')
                  }>
                  <Image
                    source={item.image}
                    style={{...styles.nearByImage, height: 110}}
                  />
                  <Text
                    style={{
                      ...styles.listHeading,
                      fontSize: 15,
                      marginTop: 7,
                      marginBottom: 10,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      ...styles.listHeading,
                      fontSize: 8,
                      color: Theme.grey,
                      paddingRight: 4,
                      fontFamily: Theme.fontFamilySemiBold,
                    }}>
                    {item.des}
                  </Text>
                </TouchableOpacity>
              </Card>
            );
          }}
        />
      );
    };

    const RenderScienceSubjects = () => {
      return (
        <FlatList
          data={scienceSubjects}
          numColumns={2}
          style={{marginTop: 5}}
          keyExtractor={(item, index) => item.name}
          renderItem={({item, index}) => {
            return (
              <Card
                key={index}
                style={[styles.locationCard, {backgroundColor: '#F4F5F7'}]}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MenuScreen')}>
                  <Image
                    source={item.image}
                    style={{...styles.nearByImage, height: 110}}
                  />
                  <Text
                    style={{
                      ...styles.listHeading,
                      fontSize: 15,
                      marginTop: 7,
                      marginBottom: 10,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      ...styles.listHeading,
                      fontSize: 8,
                      color: Theme.grey,
                      paddingRight: 4,
                      fontFamily: Theme.fontFamilySemiBold,
                    }}>
                    {item.des}
                  </Text>
                </TouchableOpacity>
              </Card>
            );
          }}
        />
      );
    };

    const RenderArt = () => {
      return (
        <FlatList
          data={art}
          numColumns={2}
          style={{marginTop: 5}}
          keyExtractor={(item, index) => item.name}
          renderItem={({item, index}) => {
            return (
              <Card
                key={index}
                style={[styles.locationCard, {backgroundColor: '#F4F5F7'}]}>
                <Image source={item.image} style={{...styles.nearByImage}} />
                <Text
                  style={{
                    ...styles.listHeading,
                    fontSize: 14,
                    marginTop: 7,
                    color: Theme.grey,
                  }}>
                  {item.title}
                </Text>
              </Card>
            );
          }}
        />
      );
    };

    const RenderOnlineSubject = () => {
      return (
        <FlatList
          data={onlineSubject}
          numColumns={2}
          style={{marginTop: 5}}
          keyExtractor={(item, index) => item.name}
          renderItem={({item, index}) => {
            return (
              <Card
                key={index}
                style={[styles.locationCard, {backgroundColor: '#F4F5F7'}]}>
                <Image
                  source={item.image}
                  style={{...styles.nearByImage, height: 110}}
                />
                <View style={styles.starView}>
                  <Text
                    style={{
                      ...styles.listHeading,
                      fontSize: 15,
                      marginTop: 10,
                      marginBottom: 5,
                    }}>
                    {item.title}
                  </Text>
                  <EvilIcons
                    size={20}
                    name="star"
                    color={Theme.primary}
                    style={{marginLeft: 4}}
                  />
                </View>
                <Text
                  style={{
                    ...styles.listHeading,
                    fontSize: 12,
                    marginRight: 10,
                    marginBottom: 5,
                  }}>
                  {item.name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      ...styles.listHeading,
                      fontSize: 15,
                      color: Theme.primary,
                    }}>
                    ${item.price}
                  </Text>
                  <Text
                    style={{
                      ...styles.listHeading,
                      fontSize: 12,
                    }}>
                    {item.subjectcs}
                  </Text>
                </View>
              </Card>
            );
          }}
        />
      );
    };
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <ScrollView>
          <ImageBackground
            source={Images.homeListBg}
            style={styles.listContainer}>
            <View style={styles.header}>
              <Text style={styles.near}>NEAR WEMBLEY</Text>
              <View style={styles.inputContainer}>
                <Text
                  style={{
                    ...styles.near,
                    fontSize: 18,
                    fontFamily: Theme.fontFamily,
                  }}>
                  Tutors Near You
                </Text>

                <Searchbar
                  placeholder="Find a Tutor"
                  onChangeText={search => this.setState({search})}
                  value={search}
                  style={styles.searchBar}
                  iconColor={Theme.primary}
                  placeholderTextColor={Theme.grey}
                />
              </View>
            </View>

            <Swiper
              showsPagination={false}
              style={styles.wrapper}
              showsButtons={false}>
              {sliderData.map(d => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('BookGroupSession')
                    }
                    style={styles.slide1}>
                    <Image source={d.image} style={styles.slideImg} />
                    <Text style={styles.name}>{d.name}</Text>
                    <Text style={styles.subject}>{d.subject}</Text>
                    <Text style={styles.price}>£ {d.priec}/hr</Text>
                  </TouchableOpacity>
                );
              })}
            </Swiper>
          </ImageBackground>

          <View style={styles.endContainer}>
            <Text style={styles.listHeading}>Explore Nearby</Text>
            <RenderCities />

            <View style={{...styles.headingContianer, marginBottom: -4}}>
              <Text style={styles.lightHeading}>
                Explore Different Categories
              </Text>
              <Text style={{...styles.lightHeading, fontSize: 12}}>
                More <AntDesign name="right" size={11} />
              </Text>
            </View>

            <Text
              style={{
                ...styles.lightHeading,
                color: Theme.primary,
                fontSize: 15,
                padding: '3%',
                paddingTop: 0,
              }}>
              We made learning easy for you`
            </Text>
            <RenderSubjects />

            <View style={{...styles.headingContianer, marginBottom: -4}}>
              <Text style={styles.lightHeading}>Subjects</Text>
              <Text style={{...styles.lightHeading, fontSize: 12}}>
                More <AntDesign name="right" size={11} />
              </Text>
            </View>
            <RenderScienceSubjects />

            <View style={{...styles.headingContianer, marginBottom: -4}}>
              <Text style={styles.lightHeading}>
                Subject Tuitions at Low Price
              </Text>
              <Text style={{...styles.lightHeading, fontSize: 12}}>
                More <AntDesign name="right" size={11} />
              </Text>
            </View>
            <RenderScienceSubjects />

            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('CardCheckout')}>
              <Text style={styles.btnText}>See All</Text>
            </TouchableOpacity>

            <RenderArt />

            <View style={{...styles.headingContianer, marginBottom: -4}}>
              <Text style={styles.lightHeading}>Online Subject Tutors</Text>

              <Text style={{...styles.lightHeading, fontSize: 12}}>
                More <AntDesign name="right" size={11} />
              </Text>
            </View>
            <RenderOnlineSubject />
            <View style={{...styles.headingContianer, marginBottom: -4}}>
              <Text style={styles.lightHeading}>Online Subject Tutors</Text>

              <Text style={{...styles.lightHeading, fontSize: 12}}>
                More <AntDesign name="right" size={11} />
              </Text>
            </View>
            <RenderOnlineSubject />

            <View style={{...styles.headingContianer, marginBottom: -4}}>
              <Text style={styles.lightHeading}>Online Subject Tutors</Text>

              <Text style={{...styles.lightHeading, fontSize: 12}}>
                More <AntDesign name="right" size={11} />
              </Text>
            </View>
            <RenderOnlineSubject />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddEditReview')}
              style={{
                ...styles.btn,
                width: '80%',
                padding: 16,
                alignSelf: 'center',
              }}>
              <Text style={styles.btnText}>See All</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('AttendenceSceesionList')
            }>
            <Image
              source={Images.slider}
              style={{
                width: Theme.width,
                height: Theme.height * 0.25,
              }}
            />
          </TouchableOpacity>

          <View style={styles.bottomContainer}>
            <Text style={styles.stay}>Stay Informed</Text>
            <TouchableOpacity style={styles.listItem}>
              <AntDesign name="arrowright" size={22} style={{marginTop: 5}} />
              <View style={styles.forStudents}>
                <Text
                  style={{
                    ...styles.stay,
                    fontSize: 18,
                    marginLeft: 10,
                  }}>
                  For students
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem}>
              <AntDesign name="arrowright" size={22} style={{marginTop: 5}} />
              <View
                style={{
                  borderBottomColor: Theme.grey,
                  borderBottomWidth: 1,
                  width: '100%',
                  paddingBottom: 15,
                }}>
                <Text
                  style={{
                    ...styles.stay,
                    fontSize: 18,
                    marginLeft: 10,
                  }}>
                  How it works learner
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem}>
              <AntDesign name="arrowright" size={22} style={{marginTop: 5}} />
              <View
                style={{
                  borderBottomColor: Theme.grey,
                  borderBottomWidth: 1,
                  width: '100%',
                  paddingBottom: 15,
                }}>
                <Text
                  style={{
                    ...styles.stay,
                    fontSize: 18,
                    marginLeft: 10,
                  }}>
                  Cancellation Policy
                </Text>
                <Text
                  style={{
                    ...styles.stay,
                    fontSize: 16,
                    color: '#858585',
                    marginLeft: 10,
                  }}>
                  Learn what’s covered
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem}>
              <AntDesign name="arrowright" size={22} style={{marginTop: 5}} />
              <View
                style={{
                  width: '100%',
                  paddingBottom: 15,
                }}>
                <Text
                  style={{
                    ...styles.stay,
                    fontSize: 18,
                    marginLeft: 10,
                  }}>
                  Help Center
                </Text>
                <Text
                  style={{
                    ...styles.stay,
                    fontSize: 16,
                    color: '#858585',
                    marginLeft: 10,
                  }}>
                  Get support
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
  forStudents: {
    borderBottomColor: Theme.grey,
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 15,
  },
  starView: {flexDirection: 'row', alignItems: 'center'},
  logo: {
    width: 120,
    height: 40,
    margin: 30,
  },
  header: {
    backgroundColor: Theme.primary,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  near: {
    color: Theme.white,
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 20,
  },
  inputContainer: {
    width: '90%',
    marginTop: 4,
    paddingRight: 15,
  },
  searchBar: {
    fontFamily: Theme.fontFamily,
    borderRadius: 10,
    marginTop: 10,
  },
  listContainer: {
    width: '100%',
    height: Theme.heightPer * 50,
  },
  endContainer: {
    width: '100%',
    padding: '3%',
  },
  listHeading: {
    fontSize: 22,
    alignItems: 'center',
    fontFamily: Theme.fontFamily,
    marginBottom: 15,
    marginLeft: 12,
  },
  locationCard: {
    width: '46%',
    borderRadius: 10,
    margin: '2%',
  },
  nearByImage: {
    width: '100%',
    height: Theme.widthPer * 45,
    borderRadius: 10,
  },
  locationIcon: {
    width: 18,
    height: 24,
    resizeMode: 'stretch',
  },
  locationCardInner: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 0,
    marginTop: 5,
  },
  headingContianer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: '3%',
  },
  lightHeading: {
    color: Theme.grey,
    fontFamily: Theme.fontFamily,
    fontSize: 18,
  },
  btn: {
    backgroundColor: Theme.accent,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    borderRadius: 6,
    alignSelf: 'flex-end',
    marginTop: 30,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  btnText: {
    color: Theme.white,
    fontFamily: Theme.fontFamily,
    fontSize: 16,
  },
  bottomContainer: {
    backgroundColor: Theme.white,
    padding: '5%',
  },
  stay: {
    color: Theme.black,
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 22,
  },
  listItem: {
    borderBottomColor: Theme.searchBarBg,
    borderBottomWidth: 1 / 2,
    flexDirection: 'row',
    width: '80%',
    marginTop: 15,
  },

  wrapper: {},
  slide1: {
    width: '90%',
    height: '78%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '9%',
  },
  slideImg: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  name: {
    fontFamily: Theme.fontFamily,
    fontSize: 18,
    color: Theme.grey,
    marginTop: 4,
  },
  subject: {
    fontFamily: Theme.fontFamily,
    fontSize: 12,
    color: Theme.white,
  },
  price: {
    fontFamily: Theme.fontFamily,
    fontSize: 17,
    color: Theme.primary,
  },
});
