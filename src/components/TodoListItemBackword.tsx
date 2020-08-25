import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

interface TodoListItemBackwordProps {
  isOpen: boolean;
}

const TodoListItemBackword: React.FC<TodoListItemBackwordProps> = ({isOpen}) => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff)");
  useEffect(() => {
    if (isOpen) {
      setBackgroundColor("#009900");
    } else {
      setBackgroundColor("#999999");
    }
  }, [isOpen]);

  return (
    <List.Item
      title=""
      style={{backgroundColor: backgroundColor}}
      left={() => <List.Icon color="#ffffff" icon="check-circle-outline"/>}
    />
  )
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#999999'
  },
});

export default TodoListItemBackword;