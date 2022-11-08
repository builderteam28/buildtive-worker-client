import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../helpers/theme';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const ProjectCard = ({ renderOn = 'home', item }) => {
  const navigation = useNavigation();

  const onPressDetail = () => {
    navigation.navigate('ProjectDetail', {
      id: item.id,
    });
  };

  if (renderOn === 'home') {
    const home = item;
    return (
      <TouchableOpacity onPress={onPressDetail} style={styles.container}>
        <View style={styles.titleButtonContainer}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: theme.font.bold }}>{home.name}</Text>
          </View>
        </View>
        <View style={styles.titleButtonContainer}>
          <Text
            style={{
              fontFamily: theme.font.regular,
              fontSize: 13,
            }}
          >
            {home.Category.name[0].toUpperCase() + home.Category.name.substring(1)}
          </Text>
          {renderOn === 'jobs' ? (
            <TouchableOpacity onPress={onPressDetail} style={[styles.statusContainer, { backgroundColor: theme.colors.black }]}>
              <Text style={styles.buttonDetail}>Details</Text>
            </TouchableOpacity>
          ) : undefined}
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.dataItem}>
            <Ionicons name="people" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>{home.acceptedWorker + '/' + home.totalWorker}</Text>
          </View>
          <View style={styles.dataItem}>
            <MaterialIcons name="attach-money" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>{home.cost}</Text>
          </View>
          <View style={styles.dataItem}>
            <AntDesign name="clockcircle" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>{home.tenor ? home.tenor + ' Days' : undefined}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (renderOn === 'jobs') {
    const job = item;
    return (
      <TouchableOpacity style={styles.container} onPress={onPressDetail}>
        <View style={styles.titleButtonContainer}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: theme.font.bold }}>{job.Project.name}</Text>
          </View>
          <View style={[styles.statusContainer, { backgroundColor: theme.colors.white }]}>
            <Text style={{ fontFamily: theme.font.bold }}>{job.status[0].toUpperCase() + job.status.substring(1)}</Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.dataItem}>
            <Ionicons name="people" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>{job.acceptedWorker + '/' + job.Project.totalWorker}</Text>
          </View>
          <View style={styles.dataItem}>
            <MaterialIcons name="attach-money" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>acas</Text>
          </View>
          <View style={styles.dataItem}>
            <AntDesign name="clockcircle" size={15} color="black" style={styles.iconItem} />
            <Text style={styles.textItem}>dwads</Text>
          </View>
        </View>
        {/* <View style={styles.titleButtonContainer}>
          <Text></Text> */}
        {/* {renderOn === 'jobs' ? (
            <TouchableOpacity  style={[styles.statusContainer, { backgroundColor: theme.colors.black }]}>
              <Text style={styles.buttonDetail}>Details</Text>
            </TouchableOpacity>
          ) : undefined} */}
        {/* </View> */}
      </TouchableOpacity>
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
  buttonDetail: { color: theme.colors.white },
});
