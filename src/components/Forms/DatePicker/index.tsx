import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Pressable, View} from 'react-native';
import Typography from '../Typography';
import {styles} from './styles';

interface CustomDatePickerProps {
  defaultDate: string;
  onDateChange: (date: Date) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  defaultDate,
  onDateChange,
}) => {
  const [date, setDate] = useState(new Date(defaultDate));
  const [show, setShow] = useState(false);

  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      onDateChange(selectedDate);
      setShow(false);
    }
  };

  return (
    <Pressable style={styles.pressable} onPress={() => setShow(true)}>
      <View style={styles.container}>
        {date ? (
          <Typography
            title={`${date.getFullYear()}-${(date.getMonth() + 1)
              .toString()
              .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`}
            type="subheading"
          />
        ) : (
          <Typography title="Date of birth" type="subheading" />
        )}
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            minimumDate={new Date(1994, 10, 20)}
            maximumDate={new Date()}
            onChange={onChange}
          />
        )}
      </View>
    </Pressable>
  );
};

export default CustomDatePicker;
