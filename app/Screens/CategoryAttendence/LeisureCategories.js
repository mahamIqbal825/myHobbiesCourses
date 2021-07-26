import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icons from '../../constants/Icons';
import Theme from '../../utils/Theme';

export default class LeisureCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'Art & Craft (109)',
          icon: Icons.art,
          type: 's',
        },
        {
          name: 'Beauty & Fashion (9)',
          icon: Icons.beauty,
          type: 's',
        },
        {
          name: 'Cooking (34)',
          icon: Icons.chef,
          type: 'l',
        },
        {
          name: 'Dance (1)',
          icon: Icons.dance,
          type: 'l',
        },
        {
          name: 'Education (7)',
          icon: Icons.education,
          type: 's',
        },
        {
          name: 'Film & Acting (2)',
          icon: Icons.film,
          type: 'l',
        },
        {
          name: 'Fitness & Health (0)',
          icon: Icons.health,
          type: 's',
        },
        {
          name: 'Language (0)',
          icon: Icons.language,
          type: 'l',
        },
        {
          name: 'Music & Singing (0)',
          icon: Icons.mic,
          type: 'l',
        },
        {
          name: 'Photography (2)',
          icon: Icons.cam,
          type: 'l',
        },
      ],
    };
  }

  render() {
    const {items} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex: 1}} />
          <Text style={styles.headerText}>Photography</Text>
          <View style={styles.full}>
            <Image source={Icons.location} style={styles.locationIcon} />
          </View>
        </View>

        <FlatList
          data={items}
          style={{marginTop: 40}}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <Card elevation={5} style={styles.cardStyle}>
                <TouchableOpacity style={styles.item}>
                  <Image
                    source={item.icon}
                    resizeMode="center"
                    style={styles.itemIcon}
                  />
                  <Text style={styles.itemName}>{item.name}</Text>
                </TouchableOpacity>
              </Card>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.backgroundColor,
    flex: 1,
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
});
