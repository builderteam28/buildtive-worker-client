import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

export const DatePicker = ({ dateValue = '', onChangeDate }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    onChangeDate(currentDate.toLocaleString());
  };

  const showDate = () => {
    setShow(true);
  };

  return (
    <View>
      <Pressable onPress={showDate}>
        <TextInput editable={false} value={!dateValue ? '' : date.toLocaleString()} style={styles.textInput} />
      </Pressable>
      {show && <DateTimePicker testID="dateTimePicker" value={date} mode={'date'} onChange={onChange} />}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: { fontSize: 15, borderWidth: 1, borderColor: 'black', padding: 5, borderRadius: 5, color: 'black' },
});