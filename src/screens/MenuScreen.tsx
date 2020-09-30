import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import {ListItem} from "react-native-elements";
import {StackParamList} from "./types";
import {StackNavigationProp} from "@react-navigation/stack";
import ProjectList from "../components/ProjectList";

type MenuScreenNavigationProp = StackNavigationProp<StackParamList, 'MenuScreen'>
type MenuScreenRouteProp = RouteProp<StackParamList, 'MenuScreen'>

interface MenuScreenProps {
  navigation: MenuScreenNavigationProp,
  route: MenuScreenRouteProp;
};

const MenuScreen: React.FC<MenuScreenProps> = ({navigation})  => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('InboxScreen');
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title="Inbox"
          titleStyle={styles.listTitle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TodayScreen');
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title="Today"
          titleStyle={styles.listTitle}
        />
      </TouchableOpacity>
      <ProjectList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  listTitle: {
    fontWeight: "600",
  }
});

export default MenuScreen;
