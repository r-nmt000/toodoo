import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NewTodoBottomSheetProps {
}

const NewTodoContent = (props: NewTodoBottomSheetProps): JSX.Element => {
  return (
    <View style={styles.panel}>
      <View>
        <Text>Copy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: '#2c2c2fAA',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },

});

export default NewTodoContent;