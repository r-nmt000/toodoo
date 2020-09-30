import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RotatableChevronIcon from "./RotatableChevronIcon";
import { Feather } from '@expo/vector-icons';
import { Context as NewProjectBottomSheetContext } from "../contexts/newProjectBottomSheetContext";

interface ListHeaderIconSetProps {
}

export default React.forwardRef<RotatableChevronIcon, ListHeaderIconSetProps>(
  (
    {}, ref
  ) => {
    const {openBottomSheet} = useContext(NewProjectBottomSheetContext);

    return (
      <View style={styles.container}>
        <RotatableChevronIcon ref={ref}/>
        <TouchableOpacity
          onPress={openBottomSheet}
        >
          <Feather style={styles.plusIcon} name="plus" size={24} color="gray"/>
        </TouchableOpacity>
      </View>
    )
  }
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  plusIcon: {
    marginLeft: 16,
    paddingTop: 2,
  },
  space: {
    width: 4
  }
});

