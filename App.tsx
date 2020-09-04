import React, {RefObject, useContext, useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import Observable from 'zen-observable-ts';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_export from './src/aws-exports';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import { Provider as PaperProvider, Portal, FAB } from 'react-native-paper';
import MenuScreen from "./src/screens/MenuScreen";
import InboxScreen from "./src/screens/InboxScreen";
import TodayScreen from "./src/screens/TodayScreen";
import {StackParamList} from "./src/screens/types";
import NewTodoContent from "./src/components/NewTodoContent";
import { Context as TodoContext, Todo, Provider as TodoProvider } from "./src/contexts/todoContext";
import {onCreateTodo, } from "./src/graphql/subscriptions";
import CustomBottomSheet from "./src/components/CustomBottomSheet";

Amplify.configure(aws_export);
const Stack = createStackNavigator<StackParamList>();
const AnimatedView = Animated.View;

const App = () => {
  const { addTodo } = useContext(TodoContext);
  const [isShadowRendered, setShadowRendered] = useState(false);

  useEffect(() => {
    const createTodoListener = (API.graphql(graphqlOperation(onCreateTodo)) as Observable<object>)
      .subscribe({
        next: (todoData) => {
          // @ts-ignore
          const todo = todoData.value.data.onCreateTodo;
          addTodo(todo);
        }
      });
    return () => {
      if (createTodoListener) {
        createTodoListener.unsubscribe();
      }
    };
  }, []);

  // @ts-ignore
  const bs = React.createRef<CustomBottomSheet>();
  const newTodoContentRef = React.createRef<NewTodoContent>();
  let fall = new Animated.Value(1);

  const renderShadow = (bs: RefObject<BottomSheet>) => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    });

    const getPointerEvents = (): 'none' | 'auto' => {
      if (isShadowRendered) {
        return 'auto';
      }
      return 'none';
    };

    return (
      <AnimatedView
        onTouchEnd={() => {
          setShadowRendered(false);
          bs.current!.snapTo(1)
        }}
        pointerEvents={getPointerEvents()}
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    )
  };

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
            bs.current!.snapTo(0);
            newTodoContentRef.current!.focusOnInput();
            setShadowRendered(true);
          }}
        />
        <CustomBottomSheet
          ref={bs}
          snapPoints={[400, 0]}
          initialSnap={1}
          callbackNode={fall}
          onCloseStart={() => {
            newTodoContentRef.current!.blurInput();
          }}
          renderContent={() => { return <NewTodoContent ref={newTodoContentRef}/>}}
        />
      </Portal>
      {renderShadow(bs)}
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
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
});

export default () => {
  return (
    <PaperProvider>
      <TodoProvider>
        <App/>
      </TodoProvider>
    </PaperProvider>
  );
}
