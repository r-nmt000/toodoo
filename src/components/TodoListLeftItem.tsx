import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

interface TodoListItemBackwardProps {
  isOpening: boolean;
  isTodoDone: boolean;
}

const TodoListLeftItem: React.FC<TodoListItemBackwardProps> = ({isOpening, isTodoDone}) => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff)");
  useEffect(() => {
    if (!isOpening) {
      setBackgroundColor("#ffffff");
      return;
    }
    if (isTodoDone) {
      setBackgroundColor("#007700");
    } else {
      setBackgroundColor("#aaaaaa");
    }
  }, [isOpening, isTodoDone]);

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
    backgroundColor: '#aaaaaa',
  },
});

export default TodoListLeftItem;