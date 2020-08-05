import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import {ListItem} from "react-native-elements";
import {StackParamList} from "./types";
import {StackNavigationProp} from "@react-navigation/stack";

type MenuScreenNavigationProp = StackNavigationProp<StackParamList, 'MenuScreen'>
type MenuScreenRouteProp = RouteProp<StackParamList, 'MenuScreen'>

interface MenuScreenProps {
  navigation: MenuScreenNavigationProp,
  route: MenuScreenRouteProp;
};

const MenuScreen = ({navigation}: MenuScreenProps): JSX.Element => {

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title="Inbox"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ListItem
          chevron
          bottomDivider={true}
          title="Today"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MenuScreen;