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
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

export default class LeisureCourcesResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [
        {
          name: 'Introduction to Azure Resource',
          subject: 'Education ,IT & Computer',
          fee: ' (Adult 18+)   $500',
          pic: Images.artn1,
        },
        {
          name: 'Introduction to Azure Resource',
          subject: 'Education ,IT & Computer',
          fee: ' (Adult 18+)   $500',
          pic: Images.artn2,
        },
        {
          name: 'Introduction to Azure Resource',
          subject: 'Education ,IT & Computer',
          fee: ' (Adult 18+)   $500',
          pic: Images.art1,
        },
        {
          name: 'Introduction to Azure Resource',
          subject: 'Education ,IT & Computer',
          fee: ' (Adult 18+)   $500',
          pic: Images.art2,
        },
      ],
    };
  }
  render() {
    const {tutors} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={Images.back} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>find by Session Type </Text>
            <View />
          </View>
          <Card elevation={5} style={styles.search}>
            <View style={styles.searchBar}>
              <Image
                source={Images.search}
                style={{...styles.searchIcon, tintColor: Theme.fontColorLight}}
              />
              <TextInput
                placeholder="Add a date  "
                placeholderTextColor={Theme.fontColorLight}
                style={styles.input}
              />
              <Image source={Images.filter} style={styles.icon} />
            </View>
          </Card>

          <View style={styles.chipContainer}>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>{'Art & Crift'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Cooking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Dance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Photography</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>{'Art & Crift'}</Text>
            <Text style={styles.more}>View All</Text>
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
                  </View>
                </Card>
              );
            }}
          />

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Cooking</Text>
            <Text style={styles.more}>View All</Text>
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
                  </View>
                </Card>
              );
            }}
          />

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Dance</Text>
            <Text style={styles.more}>View All</Text>
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
    width: 30,
    height: 30,
    marginRight: 10,
  },
  searchIcon: {
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
    marginBottom: '5%',
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
    justifyContent: 'space-between',
  },
  input: {
    height: 55,
    fontSize: 16,
    textAlign: 'left',
    fontFamily: Theme.fontFamilySemiBold,
    flex: 1,
  },
  search: {
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: '5%',
    justifyContent: 'space-between',
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
    paddingHorizontal: 6,
  },
  chipText: {
    color: Theme.white,
    fontFamily: Theme.fontFamily,
    fontSize: 16,
  },
  headingContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginBottom: 10,
    marginTop: 10,
  },
  heading: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 20,
  },
  more: {
    fontFamily: Theme.fontFamily,
    fontSize: 15,
    color: Theme.fontColorLight,
  },
  tutorInnerContainer: {},
  tutorContainer: {
    width: '46%',
    margin: '2%',
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 10,
  },
  avatar: {
    width: '100%',
    height: 170,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  name: {
    fontFamily: Theme.fontFamily,
    fontSize: 19,
    marginTop: 15,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  subject: {
    fontFamily: Theme.fontFamily,
    color: Theme.grey,
    fontSize: 14,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
});
