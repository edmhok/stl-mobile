import {View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import {LottoStyle as style} from './lotto.style';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import moment from "moment";


export default function Lotto() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  
  const handleDateChange = (date) => {
    setSelectedDate(selectedDate);
  };

  const searchLotto = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/lotto/date/${moment(selectedDate).format("YYYY-MM-DD")}`);
      console.log(response.data)
      setData(response.data);
      Alert.alert('Success', 'Lotto Result Found!');

    } catch (error) {
      Alert.alert('Error', 'Error search!');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.contentBox}>
        <Text style={style.title}>Lotto Result</Text>
        <Text style={style.label}>Date</Text>
      
        <View style={style.schedNumber}>
          <Picker
            selectedValue={selectedDate}
            onValueChange={(itemValue) => setSelectedDate(itemValue)}
            style={style.drop}
            onFocus={() => setOpen(true)}
            onChange={(text) => setSelectedDate(text)} 
            >
            <Picker.Item 
              label={moment(selectedDate).format("YYYY-MM-DD")}
              value={moment(selectedDate).format("YYYY-MM-DD")} />
          </Picker>
  
            <DatePicker
              modal
              date={selectedDate}
              mode="date"
              onDateChange={handleDateChange}
              open={open}
              onConfirm={(selectedDate) => {
                setOpen(true)
                setSelectedDate(selectedDate)
              }}
              onCancel={() => {
                setOpen(false)
              }}

            />
        </View>

      </View>
      
    <TouchableOpacity style={style.addOpacity} onPress={searchLotto}>
      <Text style={style.btnText}>Search</Text>
    </TouchableOpacity>
      <View style={style.horizontalLines} />
        <View style={style.resTable}>
          {data.map((item) => (
            <View key={item} style={style.resTab}>
              <Text style={style.logsText}>{item.draw_time}</Text>
              <View style={style.resView}>
                <Text style={style.logsText}>{item.game_mode} - {item.number}</Text>
              </View>
            </View>
            ))}
      </View>
    </View>
  );
}

