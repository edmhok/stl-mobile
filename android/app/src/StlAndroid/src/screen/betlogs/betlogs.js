import {View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, {useState} from 'react';
import {BetlogStyle as style} from './betlogs.style';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import moment from "moment";


export default function Lotto() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDTime, setSelectedDTime] = useState('');
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  
  const handleDateChange = (date) => {
    setSelectedDate(selectedDate);
  };

  const searchBetLogs = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/bets/date/${moment(selectedDate).format("YYYY-MM-DD")}`);
      console.log(response.data)
      setData(response.data);
      Alert.alert('Success', 'Bet Result Found!');

    } catch (error) {
      Alert.alert('Error', 'Error search!');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.contentBox}>
        <Text style={style.title}>Bet Logs</Text>
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
        <Text style={style.label}>Draw Time</Text>
        <View style={style.schedNumber}>
          <Picker
            selectedValue={selectedDTime}
            onValueChange={(itemValue) => setSelectedDTime(itemValue)}
            style={style.drop}
            onFocus={() => setOpen(true)}
            onChange={(text) => setSelectedDTime(text)} 
            >
            <Picker.Item label="11 AM" value="11 AM" />
            <Picker.Item label="4 PM" value="4 PM" />
            <Picker.Item label="9 PM" value="9 PM" />
          </Picker>
        </View>
      </View>
      
    <TouchableOpacity style={style.addOpacity} onPress={searchBetLogs}>
      <Text style={style.btnText}>Search</Text>
    </TouchableOpacity>
      <View style={style.horizontalLines} />
        <ScrollView style={style.resTable}>
          {data.map((item) => (
            <View key={item} style={style.resTab}>
              <View style={{width:250}}>
              <View style={style.resView}>
              <Text style={style.logsText}>Transaction No:{item.id}</Text>
                <Text style={style.logsText}>ABC -{item.amount} | {item.game_mode}</Text>
                <Text style={style.logsText}>Total:₱{150}</Text>
                <Text style={style.logsText}>Time: {item.draw_time}</Text>

                <View style={style.rightC}>
                    <TouchableOpacity style={style.btnDel} onPress={() => deleteData(index)}>
                      <Text style={style.btnText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
              </View>
              </View>
            </View>
            ))}
        </ScrollView>
      </View>
  );
}

