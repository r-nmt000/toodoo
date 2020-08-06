import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import aws_export from './src/aws-exports';
import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomSheet from 'reanimated-bottom-sheet'
import { Provider as PaperProvider, Portal, FAB } from 'react-native-paper';
import MenuScreen from "./src/screens/MenuScreen";
import InboxScreen from "./src/screens/InboxScreen";
import TodayScreen from "./src/screens/TodayScreen";
import {StackParamList} from "./src/screens/types";
import NewTodoContent from "./src/components/NewTodoContent";

Amplify.configure(aws_export);
const Stack = createStackNavigator<StackParamList>();

const App = () => {

  const bs = React.createRef<BottomSheet>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MenuScreen"
      >
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
        />
        <Stack.Screen
          name="InboxScreen"
          component={InboxScreen}
        />
        <Stack.Screen
          name="TodayScreen"
          component={TodayScreen}
        />
      </Stack.Navigator>
      <Portal>
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => {
            if (bs && bs.current) {
              bs.current.snapTo(0);
            }
          }}
        />
        <BottomSheet
          ref={bs}
          snapPoints={[400, 0]}
          initialSnap={1}
          renderContent={() => { return <NewTodoContent/>}}
        />
      </Portal>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 16,
  }
});

export default () => {
  return (
    <PaperProvider>
      <App/>
    </PaperProvider>
  );
}
