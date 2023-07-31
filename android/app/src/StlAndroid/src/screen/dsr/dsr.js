import {View, Text, TouchableOpacity, Alert, ScrollView, TextInput } from 'react-native';
import React, {useState} from 'react';
import {DsrStyle as style} from './dsr.style';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';
import moment from "moment";


export default function Dsr() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  
  const handleDateChange = (date) => {
    setSelectedDate(selectedDate);
  };

  const searchDsrLogs = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/bets/date/${moment(selectedDate).format("YYYY-MM-DD")}`);
      setData(response.data)
      Alert.alert('Success', 'Result Found!');

    } catch (error) {
      Alert.alert('Error', 'Error search!');
    }
  };

  const sortedData = data.filter(item => 
    item.draw_time).sort((game_mode) => game_mode.amount - game_mode.amount);


  // const totalAmount = data.reduce((accumulator, item) => {
  //   if (item.game_mode === 'L1') {
  //     return accumulator + item.amount;
  //   }
  //   return accumulator;
  // }, 0);

  return (
    <View style={style.container}>
      <View style={style.contentBox}>
        <Text style={style.title}>Daily Sales Report</Text>
        <Text style={style.label}>Date</Text>
        <View style={style.schedNumber}>
          <TextInput
            value={moment(selectedDate).format("YYYY-MM-DD")}
            onChangeText={handleDateChange}
            style={style.drop}
            onFocus={() => setOpen(true)}
            />
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
      
    <TouchableOpacity style={style.addOpacity} onPress={searchDsrLogs}>
      <Text style={style.btnText}>Search</Text>
    </TouchableOpacity>
      <View style={style.horizontalLines} />
        <ScrollView style={style.resTable}>
          {sortedData.map((item) => (
            <View key={item} style={style.resView}>
              <Text style={style.logsText}>
                {item.game_mode} : {item.amount}</Text>
              {/* <Text style={style.logsText}>{filteredData.game_mode} : ₱{filteredData.amount}</Text>  */}
                {/* <Text style={style.logsText}>Total: ₱{filteredData.totalAmount}</Text> */}
                {/* <Text style={style.logsText}>Grand Total: ₱{reducedValue}</Text> */}

            </View>
            ))}
        </ScrollView>
      </View>
  );
}

