import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

interface TodoListItemBackwardProps {
  isTodoDone?: boolean;
}

const TodoListLeftItem: React.FC<TodoListItemBackwardProps> = ({isTodoDone}) => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff)");
  useEffect(() => {
    if (isTodoDone) {
      setBackgroundColor("#007700");
    } else {
      setBackgroundColor("#aaaaaa");
    }
  }, [isTodoDone]);

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
    backgroundColor: '#aaaaaa'
  },
});

export default TodoListLeftItem;