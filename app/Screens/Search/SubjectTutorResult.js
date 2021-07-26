import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-paper';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default class SubjectTutorResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [
        {
          name: 'Elizaa17',
          subject: 'English',
          fee: '£6/Hr',
          pic: Images.t1,
        },
        {
          name: 'Elizaa17',
          subject: 'Primary',
          fee: '£6/Hr',
          pic: Images.t2,
        },
        {
          name: 'Elizaa17',
          subject: 'English',
          fee: '£6/Hr',
          pic: Images.t3,
        },
        {
          name: 'Elizaa17',
          subject: 'English',
          fee: '£6/Hr',
          pic: Images.t4,
        },
        {
          name: 'Elizaa17',
          subject: 'English',
          fee: '£6/Hr',
          pic: Images.t5,
        },

        {
          name: 'Elizaa17',
          subject: 'English',
          fee: '£6/Hr',
          pic: Images.t6,
        },
      ],
    };
  }
  render() {
    const navigation = this.props.navigation;
    const {tutors} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.chipContainer}>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Math</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Science</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Language</Text>
            </TouchableOpacity>
          </View>
          <Card elevation={5} style={styles.search}>
            <View style={styles.searchBar}>
              <Image source={Images.search} style={styles.icon} />
              <TextInput
                placeholder="Find your session type     "
                placeholderTextColor={Theme.primary}
                style={styles.input}
              />
            </View>
          </Card>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Recomended for you</Text>
            <Text style={styles.more}>More</Text>
          </View>

          <FlatList
            data={tutors}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <Card style={styles.tutorContainer} elevation={3}>
                  <View style={styles.tutorInnerContainer}>
                    <Image source={item.pic} style={styles.avatar} />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.subject}>{item.subject}</Text>
                    <Text style={styles.fee}>{item.fee}</Text>
                    <TouchableOpacity
                      style={styles.reviewButton}
                      onPress={() =>
                        navigation.navigate('SubjectFilterOption')
                      }>
                      <Text style={styles.btnText}>Review</Text>
                    </TouchableOpacity>
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
    paddingTop: '5%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  header: {
    width: '100%',
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '10%',
  },
  title: {
    fontSize: 18,
    fontFamily: Theme.fontFamilySemiBold,
  },
  searchBar: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 55,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Theme.fontFamily,
  },
  search: {
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: '10%',
  },
  btnView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: -18,
  },
  chipContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '10%',
  },
  chip: {
    backgroundColor: Theme.primary,
    padding: 6,
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  chipText: {
    color: Theme.white,
    fontFamily: Theme.fontFamily,
    fontSize: 18,
  },
  headingContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  heading: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 18,
  },
  more: {
    fontFamily: Theme.fontFamily,
    fontSize: 14,
    color: Theme.fontColorLight,
  },
  tutorInnerContainer: {},
  tutorContainer: {
    width: '44%',
    margin: '3%',
    marginTop: 70,
    borderRadius: 10,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginTop: -40,
    alignSelf: 'center',
  },
  reviewButton: {
    backgroundColor: Theme.accent,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnText: {
    color: Theme.white,
    fontFamily: Theme.fontFamily,
    fontSize: 18,
  },
  fee: {
    color: Theme.accent,
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
  },
  subject: {
    fontFamily: Theme.fontFamily,
    color: Theme.grey,
    fontSize: 19,
    textAlign: 'center',
  },
});
