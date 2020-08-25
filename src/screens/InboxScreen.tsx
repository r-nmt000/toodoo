import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from "@aws-amplify/api";
import { NavigationEvents } from "@react-navigation/compat";
import {onCreateTodo, onDeleteTodo} from "../graphql/subscriptions";
import {Context as TodoContext } from "../contexts/todoContext";
import { List } from 'react-native-paper';
import {StackParamList} from "./types";
import {StackNavigationProp} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';

type InboxScreenNavigationProp = StackNavigationProp<StackParamList, 'InboxScreen'>
type InboxScreenRouteProp = RouteProp<StackParamList, 'MenuScreen'>

interface InboxScreenProps {
  navigation: InboxScreenNavigationProp,
  route: InboxScreenRouteProp;
};

const InboxScreen: React.FC<InboxScreenProps> = ({navigation}) => {
  const {state:{todos}, fetchTodos} = useContext(TodoContext);
  console.log('inboxscreen is rendered');
  console.log(todos);

  useEffect(() => {
    console.log('useEffect');
    console.log(todos);
  }, []);


  return (
    <View>
      <NavigationEvents onWillFocus={fetchTodos}/>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            // タップしたらbottomsheetを表示
            <TouchableOpacity onPress={() => {
              //navigation.navigate('TrackDetail', {_id: item._id});
            }}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )
        }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InboxScreen;