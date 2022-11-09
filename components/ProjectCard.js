import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../helpers/theme';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export const ProjectCard = ({ renderOn = 'home', item }) => {
  const navigation = useNavigation();

  const formatPrice = (price) => {
    return 'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',-';
  };

  const renderCategory = (categoryId) => {
    switch (categoryId) {
      case 1:
        return <MaterialIcons name="house" size={60} color="black" />;
      case 2:
        return <MaterialCommunityIcons name="home-lightning-bolt" size={60} color="black" />;
      case 3:
        return <MaterialCommunityIcons name="toilet" size={60} color="black" />;
      case 4:
        return <MaterialCommunityIcons name="hammer-screwdriver" size={60} color="black" />;
      case 5:
        return <MaterialIcons name="format-paint" size={60} color="black" />;
      case 6:
        return <MaterialIcons name="plumbing" size={60} color="black" />;

      default:
        break;
    }
  };

  const onPressDetail = (status) => {
    if (renderOn === 'home') {
      navigation.navigate('ProjectDetail', {
        id: item.id,
      });
    } else {
      navigation.navigate(
        'ProjectDetail',
        {
          id: item.Project.id,
          status,
        },
      );
    }
  };

  if (renderOn === 'home') {
    const home = item;
    return (
      <View style={styles.container}>
        <View style={styles.titleButtonContainer}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: theme.font.bold }}>{home.name}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center' }}>
            {renderCategory(parseInt(home.Category.id))}
            <Text
              style={{
                fontFamily: theme.font.regular,
                fontSize: 13,
              }}
            >
              {home.Category.name[0].toUpperCase() + home.Category.name.substring(1)}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.dataItem}>
              <Ionicons name="people" size={15} color="black" style={styles.iconItem} />
              <Text style={styles.textItem}>{home.acceptedWorker + '/' + home.totalWorker}</Text>
            </View>
            <View style={styles.dataItem}>
              <FontAwesome5 name="money-bill" size={15} color="black" style={styles.iconItem} />
              <Text style={styles.textItem}>{formatPrice(home.cost)}</Text>
            </View>
            <View style={styles.dataItem}>
              <AntDesign name="clockcircle" size={15} color="black" style={styles.iconItem} />
              <Text style={styles.textItem}>{home.tenor > 1 ? home.tenor + ' days' : '1 day'}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onPressDetail} style={[styles.buttonDetail, { backgroundColor: theme.colors.black }]}>
          <Text style={styles.buttonDetailText}>Details</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (renderOn === 'jobs') {
    const job = item;
    return (
      <View style={styles.container}>
        <View style={styles.titleButtonContainer}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: theme.font.bold }}>{job.Project.name}</Text>
          </View>

          <View style={[styles.statusContainer, { backgroundColor: theme.colors.white }]}>
            <Text style={{ fontFamily: theme.font.bold }}>{job.status[0].toUpperCase() + job.status.substring(1)}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center' }}>
            {renderCategory(parseInt(job.Project.Category.id))}
            <View style={styles.titleButtonContainer}>
              <Text
                style={{
                  fontFamily: theme.font.regular,
                  fontSize: 13,
                }}
              >
                {job.Project.Category.name[0].toUpperCase() + job.Project.Category.name.substring(1)}
              </Text>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.dataItem}>
              <Ionicons name="people" size={15} color="black" style={styles.iconItem} />
              <Text style={styles.textItem}>{job.acceptedWorker + '/' + job.Project.totalWorker}</Text>
            </View>
            <View style={styles.dataItem}>
              <FontAwesome5 name="money-bill" size={15} color="black" style={styles.iconItem} />
              <Text style={styles.textItem}>{formatPrice(job.Project.cost)}</Text>
            </View>
            <View style={styles.dataItem}>
              <AntDesign name="clockcircle" size={15} color="black" style={styles.iconItem} />
              <Text style={styles.textItem}>{job.Project.tenor > 1 ? job.Project.tenor + ' days' : '1 day'}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => onPressDetail(job.status[0].toUpperCase() + job.status.substring(1))} style={[styles.buttonDetail, { backgroundColor: theme.colors.black }]}>
          <Text style={styles.buttonDetailText}>Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    marginBottom: 15,
  },
  statusContainer: {
    minWidth: 80,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    marginVertical: 15,
  },
  dataItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconItem: {
    marginRight: 10,
  },
  textItem: {
    fontFamily: theme.font.regular,
    fontSize: 15,
  },
  titleButtonContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  buttonDetail: { alignItems: 'center', justifyContent: 'center', paddingVertical: 8, borderRadius: 25 },
  buttonDetailText: { color: theme.colors.white },
});
