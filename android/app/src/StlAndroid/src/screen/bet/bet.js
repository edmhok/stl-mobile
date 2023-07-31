import {View, Alert, Text, TextInput, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import {BetStyle as style} from './bet.style';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default function Bet() {
  const [selectedSched, setSelectedSched] = useState('11AM');
  const [selectedGMode, setSelectedGMode] = useState('L1');
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [betLogs, setBetLogs] = useState([]);
  const [total, setTotal] = useState(0);
 
  useEffect(() => {
    const tempTotal = betLogs.reduce((accumulator, item) => accumulator + parseFloat(item.amount), 0);
    setTotal(tempTotal)
  }, [betLogs])
  
  const AddBet = () => {
    const newData = [...betLogs, { selectedSched, selectedGMode, number, amount
    }];
    setBetLogs(newData);
    setSelectedSched('11AM');
    setSelectedGMode('L1');
    setNumber('');
    setAmount('');
  };

  const saveBet = async () => {
    try {
      for (const betLog of betLogs) {
          const response = await axios.post('http://10.0.2.2:8000/bets', {
            date: '2023-05-01',
            user_ID: '1',
            draw_time: betLog.selectedSched,
            game_mode: betLog.selectedGMode,
            number: betLog.number,
            amount: betLog.amount
          });
      }
      Alert.alert('Success', 'Bets saved!');i
    } catch (error) {
      Alert.alert('Error', 'Error saving!');
    }
  };
  const deleteData = (itemId) => {
    const newBetLogs = betLogs.filter((val, index) => {
      if(index !== itemId) {
        return true;
      }
    })
    setBetLogs(newBetLogs);
  };

  return (
    <View style={style.Container}>
        <View style={style.headerPart}>
          <View>
            <Text style={style.betTitle}>Bet</Text>
          </View>
          <TouchableOpacity style={style.saveOpacity} onPress={saveBet}>
            <Text style={style.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View>
        <Text style={style.betTotal}>Total: ₱{total}</Text>
        </View>
      <View style={style.contentBox}>
        <View style={{flex: 1}}>
          <View style={style.formInput}>
            <Text style={style.label}>Schedule</Text>
            <View style={style.schedNumber}>
              <Picker
                selectedValue={selectedSched}
                onValueChange={selectedSched => setSelectedSched(selectedSched)}
                style={style.drop}>
                <Picker.Item label="11AM" value="11AM" />
                <Picker.Item label="4PM" value="4PM" />
                <Picker.Item label="9PM" value="9PM" />
              </Picker>
              <Text style={style.label}>Number</Text>
              <TextInput
                mode="outlined"
                style={style.numberInput}
                placeholder="Number"
                placeholderTextColor="#777777"
                value={number}
                keyboardType="numeric"
                onChangeText={number => setNumber(number)}
                />
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={style.betTotal}>Game Mode</Text>
          <View style={style.formInput}>
            <View style={style.schedNumber}>
              <Picker
                selectedValue={selectedGMode}
                onValueChange={selectedGMode => setSelectedGMode(selectedGMode)}
                style={style.drop}>
                <Picker.Item label="L1" value="L1" />
                <Picker.Item label="L2" value="L2" />
                <Picker.Item label="L3" value="L3" />
              </Picker>
              <Text style={style.label}>Amount</Text>
              <TextInput
                mode="outlined"
                style={style.numberInput}
                placeholder="Amount"
                placeholderTextColor="#777777"
                value={amount}
                keyboardType="numeric"
                onChangeText={amount => setAmount(amount)}
                />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={style.addOpacity} onPress={AddBet}>
        <Text style={style.btnText}>Add</Text>
      </TouchableOpacity>
        <View style={style.horizontalLines} />
          <ScrollView style={style.betTable}>
            {betLogs.map((logs, index) => (

              <View key={index} style={style.resView}>
                  <View style={{width:250}}>
                    <Text style={style.betLogsText}>Time: {logs.selectedSched}</Text>
                    <Text style={style.betLogsText}>Game Mode: {logs.selectedGMode}</Text>
                    <Text style={style.betLogsText}>Number: {logs.number}</Text>
                    <Text style={style.betLogsText}>Amount: {logs.amount}</Text>
                  </View>
                  <View style={style.rightC}>
                    <TouchableOpacity style={style.btnDel} onPress={() => deleteData(index)}>
                      <Text style={style.btnText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            ))}
          </ScrollView>
    </View>
  );
}
