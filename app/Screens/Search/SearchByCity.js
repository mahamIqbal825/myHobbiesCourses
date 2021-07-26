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
import ButtonComponent from '../../shared/components/Button';
import Theme from '../../utils/Theme';

export default class SearchByCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        {
          name: 'London',
          guests: '2 guests',
          hours: '3 hours derive ',
        },
        {
          name: 'Paris',
          guests: '2 guests',
          hours: '3 hours derive ',
        },
        ,
        {
          name: 'London',
          guests: '2 guests',
          hours: '3 hours derive ',
        },
        {
          name: 'Edinburgh',
          guests: '2 guests',
          hours: '3 hours derive ',
        },
        {
          name: 'London',
          guests: '2 guests',
          hours: '3 hours derive ',
        },
      ],
    };
  }
  render() {
    const navigation = this.props.navigation;
    const {countries} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={Icons.manu_bar} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>Sort by</Text>
            <View />
          </View>

          <View style={{padding: '3%'}}>
            <Text style={styles.heading}>Recent search</Text>
            <Card style={{borderRadius: 5}} elevation={2}>
              <View style={styles.item}>
                <Image source={Images.flag} style={styles.location} />
                <Text style={styles.itemText}> Anywhere</Text>
              </View>
            </Card>

            <Card style={{borderRadius: 5, marginTop: '4%'}} elevation={2}>
              <View style={styles.item}>
                <Image source={Images.flag} style={styles.location} />
                <Text style={styles.itemText}> Nearby</Text>
              </View>
            </Card>

            <Text style={styles.heading}>Recent search</Text>

            {countries.map(c => {
              return (
                <View style={styles.countryIcon}>
                  <Image source={Images.london} style={styles.bigItemImage} />
                  <View>
                    <Text style={styles.countryName}>{c.name}</Text>
                    <Text style={styles.countrySmallText}>{c.guests}</Text>
                    <Text style={styles.countrySmallText}>{c.hours}</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.btnView}>
            <ButtonComponent
              text="Save"
              style={{fontSize: 16}}
              onPress={() => navigation.navigate('SubjectSearch')}
            />
          </View>
          <Card elevation={5} style={styles.searchBar}>
            <View style={{flexDirection: 'row'}}>
              <Image source={Images.london} style={styles.bigItemImage1} />
              <View>
                <Text style={styles.countryName1}>Find Place to Stay</Text>
                <Text style={styles.countrySmallText}>
                  Entree homes, rooms & more
                </Text>
              </View>
            </View>
          </Card>
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
    width: 24,
    height: 24,
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
    flexDirection: 'row',
    width: '90%',
    padding: 10,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '10%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 55,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Theme.fontFamily,
  },
  heading: {
    fontFamily: Theme.fontFamilySemiBold,
    fontSize: 16,
    marginVertical: 10,
    color: Theme.black,
  },
  location: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  item: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 18,
    fontFamily: Theme.fontFamily,
    color: Theme.fontColor,
    marginLeft: 20,
  },
  bigItemImage: {
    width: Theme.widthPer * 28,
    height: Theme.heightPer * 15,
    borderRadius: 10,
    marginRight: 10,
  },
  bigItemImage1: {
    width: Theme.widthPer * 18,
    height: Theme.heightPer * 10,
    borderRadius: 10,
    marginRight: 10,
  },
  countryIcon: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countryName: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 20,
  },
  countryName1: {
    fontFamily: Theme.fontFamilyBold,
    fontSize: 18,
  },
  countrySmallText: {
    fontFamily: Theme.fontFamilySemiBold,
    color: Theme.fontColorLight,
    fontSize: 13,
  },
  btnView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 18,
  },
});
