import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';
import Swiper from 'react-native-swiper';
import Images from '../../constants/Images';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default class LeisureCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //extra start
      items: [
        {
          name: 'Art & Craft (109)',
          icon: Icons.art,
          type: 's',
        },
      ],
      //extra end'
      sliderData: [
        {
          image: Images.swiper1,
          name: 'Costain James',
          subject: 'Science',
          priec: '8.75',
        },
        {
          image: Images.swiper1,
          name: 'Costain James',
          subject: 'Science',
          priec: '8.75',
        },
        {
          image: Images.swiper1,
          name: 'Costain James',
          subject: 'Science',
          priec: '8.75',
        },
      ],
      aboutUser: [
        {
          name: ' John deo ',
          lastscene: '2days ago',
          image: Images.art1,
          caption:
            'I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in...read more',
        },
        {
          name: 'Deo Joe',
          lastscene: '2days ago',
          caption:
            'I really enjoyed this class a lot and the food came out so good! I have tried similar recipes before, but the steps this you leant in...read more',
          image: Images.art2,
        },
      ],
      userAccessories: [
        {
          accessoryName: ' E-mail ',
          accessoryImage: Images.flag1,
          accessorySign: Images.tickIcon,
        },
        {
          accessoryName: ' Mobile',
          accessoryImage: Images.mobileIcon,
          accessorySign: Images.tickIcon,
        },
        {
          accessoryName: ' Landline',
          accessoryImage: Images.phone1,
          accessorySign: Images.crossIcon,
        },
        {
          accessoryName: ' Social Media',
          accessoryImage: Images.play1,
          accessorySign: Images.crossIcon,
        },
        {
          accessoryName: 'Address ',
          accessoryImage: Images.pin1,
          accessorySign: Images.crossIcon,
        },
        {
          accessoryName: ' Credit card',
          accessoryImage: Images.atm,
          accessorySign: Images.tickIcon,
        },
      ],
      aboutCourse: [
        {
          image: Images.art1,
        },
        {
          image: Images.art1,
        },
        {
          image: Images.art1,
        },
      ],
      btns: [
        {title: 'Our tutors', rightIcon: Images.rightIcon},
        {title: 'Our locations', rightIcon: Images.rightIcon},
        {title: 'My other courses', rightIcon: Images.rightIcon},
        {title: 'All reviews', rightIcon: Images.rightIcon},
      ],
    };
  }

  render() {
    const {sliderData, aboutUser, userAccessories, aboutCourse, btns} =
      this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{height: 400}}>
            <Swiper
              showsPagination={true}
              showsButtons={false}
              activeDotColor={Theme.white}
              dotColor={Theme.grey}>
              {sliderData.map((d, i) => {
                return (
                  <View key={i} style={styles.slide1}>
                    <Image source={d.image} style={styles.slideImg} />
                  </View>
                );
              })}
            </Swiper>
            <View style={styles.header}>
              <View>
                <Image source={Icons.heartIcon} style={styles.iconStyle} />
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.pop();
                  }}>
                  <Image
                    source={Icons.backBlIcon}
                    style={{width: 18, height: 16, top: 10}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.shareView}>
                <Image
                  source={Icons.shareIcon}
                  style={{...styles.iconStyle, left: 15}}
                />
                <Image source={Icons.heartIcon} style={styles.iconStyle} />
              </View>
            </View>
          </View>
          <View style={styles.txtWrap}>
            <Text style={styles.txtStyle}>
              How to make Maggie: United states
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Fontisto name="star" size={13} color="#FF9D2B" />
              <Text style={{fontSize: 15, marginLeft: '2%'}}>4.8</Text>
              <Text style={{fontSize: 13, marginLeft: '2%'}}>
                (126 reviews)
              </Text>
              <Text
                style={{
                  ...styles.txtStyle,
                  color: Theme.accent,
                  fontSize: 13,
                  marginLeft: '3%',
                  textAlign: 'center',
                }}>
                Art & Craft-Drawing
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '6%',
                marginBottom: '5%',
              }}>
              <View>
                <View style={styles.backView}>
                  <Image
                    source={Images.education}
                    style={{height: 20, width: 20}}
                  />
                </View>
                <Text style={styles.underText}>10-20</Text>
              </View>
              <View style={styles.line}></View>
              <View>
                <View style={styles.backView}>
                  <Image
                    source={Images.folder1}
                    style={{height: 22, width: 20}}
                  />
                </View>
                <Text style={styles.underText}>Mn - Fr</Text>
              </View>
              <View style={styles.line}></View>
              <View>
                <View style={styles.backView}>
                  <Image
                    source={Images.mens1}
                    style={{height: 20, width: 23}}
                  />
                </View>
                <Text style={styles.underText}>15-99</Text>
              </View>
              <View style={styles.line}></View>
              <View>
                <View style={styles.backView}>
                  <Image
                    source={Images.location1}
                    style={{height: 20, width: 20}}
                  />
                </View>
                <Text style={styles.underText}>london</Text>
              </View>
            </View>
            {/* <Image source={Images.mapLink} style={styles.mapLink} /> */}
          </View>
          <Card elevation={5} style={styles.priceCard}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '5%',
                alignItems: 'center',
              }}>
              <View>
                <View style={styles.wrapEuro}>
                  <Image
                    source={Images.bundleIcon}
                    style={{width: 20, height: 20}}
                  />
                  <Text
                    style={{
                      ...styles.txtStyle,
                      left: 10,
                      color: Theme.primary,
                      fontSize: 20,
                    }}>
                    £23.00
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={Images.starsIcon} style={styles.imgStarIcon} />
                  <Text style={styles.Text112}>112</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.btnCheckAva}>
                <Text
                  style={{
                    ...styles.txtStyle,
                    color: Theme.white,
                    fontSize: 13,
                    opacity: 1,
                    marginTop: 0,
                  }}>
                  Check availability
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: '5%',
              }}>
              <View>
                <Text style={styles.txtTime}>2</Text>
                <Text style={styles.belowtxtTime}>DAYS</Text>
              </View>
              <Text style={styles.txtTimeColon}>:</Text>
              <View>
                <Text style={styles.txtTime}>13</Text>
                <Text style={styles.belowtxtTime}>HOURS</Text>
              </View>
              <Text style={styles.txtTimeColon}>:</Text>
              <View>
                <Text style={{...styles.txtTime, color: Theme.primary}}>
                  35
                </Text>
                <Text style={styles.belowtxtTime}>Minutes</Text>
              </View>
              <Text style={styles.txtTimeColon}>:</Text>
              <View>
                <Text style={{...styles.txtTime, color: Theme.accent}}>15</Text>
                <Text style={{...styles.belowtxtTime, color: Theme.accent}}>
                  SECONDS
                </Text>
              </View>
            </View>
            <Image source={Images.startIcon} style={styles.ImgStartIcon} />
          </Card>
          <View style={styles.wrapBelowTxt}>
            <Text style={{fontSize: 20, fontFamily: Theme.fontFamilySemiBold}}>
              About Course
            </Text>
            <Text
              style={{
                ...styles.txtTime,
                color: Theme.fontColorLight,
                fontSize: 16,
              }}>
              About Course - Add this TEXT : ***** and welcome. My name is
              Claire and I own Couchman Bespoke an ethical tailoring company
              based in London, UK. Learn to make a garment with a tailor, for a
              garment that fits like a dream.
            </Text>
            <Text
              style={{
                ...styles.txtTime,
                color: Theme.fontColorLight,
                fontSize: 16,
              }}>
              This course is to learn how to make a garment from paper pattern
              to cloth. Cloth can be purchased via Organic Textile Company or
              remnant sources via Amo Threads, The New Craft House. Bring a
              readiness to learn and maybe a note book. You will be learning
              techniques that align with your abilities. We will begin with
              copying the garment on paper and build up to making it in cloth.
              We can make from a pre-made pattern Be aware that this course
              length is based on a fairly simple garment style.
            </Text>
            <Text
              style={{
                ...styles.txtTime,
                color: Theme.fontColorLight,
                fontSize: 16,
              }}>
              For any garment with layers, corset style or a jacket, coat etc,
              double the time will be required to complete. Again if the garment
              is more complicated with layers, corset style or a jacket, coat
              etc; please book for 12+ hours. As a business for **** we collect
              donations for our Pay It Forward scheme to allow for people unable
              to afford for classes. Pay It Forward
              [here](https://www.couchman-bespoke.com/product-page/buy-1-sewing-lesson-forward).
            </Text>
            <View>
              <Image
                source={Images.cookingIcon}
                style={{width: '100%', height: 200, marginTop: 100}}
              />
              <TouchableOpacity
                style={{
                  ...styles.btnCheckAva,
                  margin: 30,
                  backgroundColor: Theme.accent,
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    ...styles.txtStyle,
                    color: Theme.white,
                    fontSize: 16,
                    // opacity: 1,
                  }}>
                  Show all photos
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  ...styles.txtTime,
                  // color: Theme.white,
                  fontFamily: Theme.fontFamilySemiBold,
                  fontSize: 20,
                }}>
                Course requirements
              </Text>
              <Text
                style={{
                  ...styles.txtTime,
                  // color: Theme.white,
                  fontFamily: Theme.fontFamilySemiBold,
                  fontSize: 15,
                }}>
                No requirements. Anyone can do this course
              </Text>

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    ...styles.txtTime,
                    color: Theme.primary,
                    fontSize: 12,
                  }}>
                  Shortlink:
                </Text>

                <Text
                  style={{
                    ...styles.txtTime,
                    // color: Theme.white,
                    fontSize: 12,
                  }}>
                  http://tinyurl.com/hm8kcog
                </Text>
              </View>

              <Text
                style={{
                  ...styles.txtTime,
                  fontFamily: Theme.fontFamilySemiBold,
                  fontSize: 20,
                }}>
                Cancellation
              </Text>
              <Text
                style={{
                  ...styles.txtTime,
                  color: Theme.primary,
                  fontFamily: Theme.fontFamilySemiBold,
                  fontSize: 15,
                }}>
                Rigid
              </Text>
              <Text
                style={{
                  ...styles.txtTime,
                  color: '#171717',
                  fontFamily: Theme.fontFamily,
                  fontSize: 12,
                }}>
                Full refund 15 days before class starts except Administration
                fees.
              </Text>
            </View>
            <FlatList
              data={aboutUser}
              horizontal={true}
              keyExtractor={(item, index) => item.name}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.wrapFlatLIst}>
                    <Image source={item.image} style={styles.imgProfile} />
                    <View>
                      <Text style={styles.txtName}>{item.name}</Text>
                      <Text style={styles.txtLastSeen}>{item.lastscene}</Text>
                      <View style={{width: '55%'}}>
                        <Text style={styles.txtLastSeen}>{item.caption}</Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />

            <TouchableOpacity style={styles.btnshowAll}>
              <Text
                style={{
                  ...styles.txtStyle,
                  fontSize: 13,
                  opacity: 1,
                }}>
                Show all 305 reviews
              </Text>
            </TouchableOpacity>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  alignSelf: 'center',
                }}>
                <Image
                  source={Images.birmingham}
                  style={{width: 50, height: 50, borderRadius: 50}}
                />
                <View>
                  <Text style={styles.txtTitle1}>
                    Meet you tutor
                    <Text style={{...styles.txtTitle, color: Theme.accent}}>
                      John deo
                    </Text>
                  </Text>
                  <Text
                    style={{
                      ...styles.txtTitle,
                      color: Theme.grey,
                      fontSize: 12,

                      marginLeft: '4%',
                    }}>
                    Member since Jan 2015
                  </Text>
                </View>
                <Image
                  source={Images.bronzeIcon}
                  style={{width: 80, height: 60}}
                />
              </View>
            </View>
            <View style={{}}>
              <Text style={[styles.txtTitle2, {alignSelf: 'center'}]}>
                Response rate:{' '}
                <Text style={{...styles.txtTitle, color: Theme.primary}}>
                  100%
                </Text>
              </Text>
              <Text style={[styles.txtTitle2, {alignSelf: 'center'}]}>
                Response time:{' '}
                <Text style={{...styles.txtTitle, color: Theme.primary}}>
                  within an hour
                </Text>
              </Text>
              <Text style={[styles.txtTitle2, {marginLeft: '2%'}]}>
                Course Last updated on:{' '}
                <Text style={{...styles.txtTitle, color: Theme.primary}}>
                  {' '}
                  2 August 2016
                </Text>
              </Text>
            </View>
            <View>
              <Text
                style={{...styles.txtAbout, marginTop: '4%', marginLeft: '2%'}}>
                About John
              </Text>
              <Text style={{...styles.txtAbout, margin: '2%'}}>
                This bitesize class is great way to dip into the subject. It
                might be the only time you take this course or it can help you
                decide if you book onto a longer course. It gives you the chance
                to talk with the tutor and also see our lovely facilities.more..
              </Text>
            </View>
            <FlatList
              data={userAccessories}
              numColumns={2}
              keyExtractor={(item, index) => item.accessoryName}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Card style={styles.wrapAccImg}>
                      <Image
                        source={item.accessoryImage}
                        style={styles.imgIcon1}
                      />
                    </Card>
                    <Text style={{...styles.txtAbout, marginTop: 20}}>
                      {item.accessoryName}
                    </Text>
                    <Image
                      source={item.accessorySign}
                      style={{...styles.imgIcon2, marginTop: 20}}
                    />
                  </View>
                );
              }}
            />
            <View style={{marginTop: '5%'}}>
              <Text
                style={{
                  ...styles.txtTime,
                  color: Theme.primary,
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginVertical: 10,
                }}>
                Certifications
              </Text>
              <Text
                style={{
                  ...styles.txtTime,
                  color: Theme.cardBackground,
                  fontSize: 12,
                }}>
                Dance teaching practice and innovations Ballromm Certificate
                dance teaching society
              </Text>
              <Text
                style={{
                  ...styles.txtTime,
                  color: Theme.primary,
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginVertical: 10,
                }}>
                Certifications
              </Text>
              <Text
                style={{
                  ...styles.txtTime,
                  color: Theme.cardBackground,
                  fontSize: 12,
                }}>
                Dance teaching practice and innovations Ballromm Certificate
                dance teaching society
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('SubjectFilterOption')
                }
                style={{
                  ...styles.btnshowAll,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: Theme.accent,
                  marginTop: 20,
                  margin: 50,
                }}>
                <Image
                  source={Images.msgIcon}
                  style={{
                    ...styles.imgIcon,
                    right: 10,
                    width: 20,
                    height: 18,
                  }}
                />
                <Text
                  style={{
                    ...styles.txtStyle,
                    color: Theme.white,
                    fontSize: 13,
                    opacity: 1,
                  }}>
                  SEND A MESSEGE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={Images.mapImage}
            style={{width: '100%', height: 300}}
          />
          <FlatList
            data={aboutCourse}
            horizontal={true}
            keyExtractor={(item, index) => item.image}
            renderItem={({item, index}) => {
              return (
                <View style={{margin: 10}}>
                  <Text
                    style={{
                      ...styles.txtTitle,
                      fontSize: 18,
                      margin: 10,
                      right: 5,
                    }}>
                    {' '}
                    Similar Courses
                  </Text>
                  <Image source={item.image} style={styles.imgCourse} />
                  <View style={{marginTop: 15, left: 5}}>
                    <Text style={styles.txtHoli}>
                      Holi makersdesigning patters{' '}
                    </Text>
                    <Text style={styles.txtHoli}>
                      From
                      <Text style={{...styles.txtHoli, color: Theme.primary}}>
                        {' '}
                        $66{' '}
                      </Text>
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={Images.starIcon}
                        style={{width: 10, height: 10}}
                      />
                      <Text
                        style={{
                          ...styles.txtHoli,
                          fontWeight: 'bold',
                          fontSize: 9,
                          left: 5,
                        }}>
                        4.84{' '}
                        <Text
                          style={{
                            ...styles.txtHoli,
                            fontSize: 9,
                            marginLeft: '2%',
                            color: Theme.grey,
                          }}>
                          (45)
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <FlatList
            data={btns}
            keyExtractor={(item, index) => item.image}
            renderItem={({item, index}) => {
              return (
                <Card elevation={2} style={styles.cardBtnWrap}>
                  <View style={styles.btnWrap}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: Theme.fontFamily,
                        color: '#707070',
                      }}>
                      {' '}
                      {item.title}
                    </Text>
                    <Image source={item.rightIcon} style={styles.imgIcon} />
                  </View>
                </Card>
              );
            }}
          />
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
  viewFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    marginTop: 20,
  },
  viewWrapBg: {
    backgroundColor: '#D8D8D8',
    width: '100%',
    height: 60,
    alignItems: 'flex-end',
  },
  cardBtnWrap: {
    width: '96%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 10,
    shadowColor: Theme.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.18,
    shadowRadius: 4.0,
    elevation: 2,

    marginTop: 20,
  },
  line: {
    backgroundColor: Theme.primary,
    height: 1,
    width: 40,
    marginBottom: 10,
  },
  btnWrap: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 15,
  },
  imgCourse: {borderRadius: 10, width: 200, height: 250, left: 5},

  txtHoli: {
    fontSize: 10,
    fontFamily: Theme.fontFamily,
    color: Theme.black,
  },
  imgIcon: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
  imgIcon2: {
    width: 17,
    height: 17,
  },
  imgIcon1: {
    width: 12,
    marginTop: 10,
    height: 15,
  },
  wrapAccImg: {
    width: 30,
    height: 30,
    left: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  txtAbout: {
    fontSize: 14,
    color: Theme.fontColorLight,
  },
  txtTitle: {
    fontSize: 14,
    color: Theme.white,
  },
  txtTitle2: {
    fontSize: 14,
    color: Theme.black,
  },
  txtTitle1: {
    fontSize: 16,
    marginLeft: '3%',
    color: Theme.black,
  },
  wrapFlatLIst: {
    flexDirection: 'row',
    // width: '90%',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fafafa',
  },
  imgProfile: {
    height: 70,
    width: 70,
    borderRadius: 50,
    bottom: 20,
  },
  txtName: {
    color: Theme.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtLastSeen: {
    color: Theme.cardBackground,
    fontSize: 12,
    left: 10,
  },
  wrapBelowTxt: {alignSelf: 'center', width: '85%', margin: '10%'},

  imgStarIcon: {
    height: 14,
    marginTop: '8%',
    width: 80,
  },
  ImgStartIcon: {
    height: 12,
    width: 88,
  },
  wrapEuro: {flexDirection: 'row', alignItems: 'center'},
  btnCheckAva: {
    backgroundColor: Theme.primary,
    height: 40,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text112: {
    fontSize: 9,
    marginLeft: '3%',
    fontWeight: 'bold',
    marginTop: '8%',
  },
  btnshowAll: {
    backgroundColor: Theme.primary,
    height: 40,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 90,
  },
  ImgStartIcon: {
    width: 32,
    height: 33,
    position: 'absolute',
    bottom: -35,
    alignSelf: 'center',
  },
  txtTime: {
    fontSize: 24,
    color: '#272C38',
    margin: '1%',
  },
  txtTimeColon: {
    fontSize: 24,
    color: '#272C38',
    margin: '1%',
    bottom: '2%',
  },
  belowtxtTime: {
    fontSize: 5,
    color: Theme.primary,
    margin: '1%',
    left: '15%',
  },
  mapLink: {
    margin: '10%',
  },
  priceCard: {
    borderRadius: 15,
    margin: '2%',
    alignSelf: 'center',
    width: '90%',

    paddingBottom: 20,
  },
  txtWrap: {alignItems: 'center'},
  txtStyle: {
    color: Theme.black,
    fontSize: 17,
    // marginTop: '3%',
    fontFamily: Theme.fontFamily,
  },
  swiperContenet: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    height: '50%',
    width: '100%',
  },
  backBtn: {
    position: 'absolute',
    paddingHorizontal: '15%',
    marginTop: '15%',
  },
  locationIcon: {
    width: 25,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '8%',
    paddingHorizontal: '5%',
    position: 'absolute',
  },
  underText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: '3%',
    fontFamily: Theme.fontFamilySemiBold,
    color: Theme.grey,
  },
  iconStyle: {width: 30, height: 30, resizeMode: 'stretch'},
  shareView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
  },
  headerText: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    color: Theme.fontColor,
    fontSize: 20,
    fontFamily: Theme.fontFamily,
  },
  full: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    textAlign: 'center',
    color: Theme.accent,
    fontSize: 17,
    fontFamily: Theme.fontFamily,
    marginTop: 10,
  },
  itemIcon: {
    height: 42,
    width: 50,
  },
  cardStyle: {
    width: '42%',
    margin: '4%',
    borderRadius: 14,
    paddingVertical: 17,
  },
  backView: {
    backgroundColor: '#E0F6F9',
    height: 45,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  slide1: {
    width: '100%',
    // height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: '9%',
  },
  slideImg: {
    width: '100%',
    height: '100%',
  },
});
