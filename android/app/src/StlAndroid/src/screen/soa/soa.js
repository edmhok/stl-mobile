import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BetStyle as style} from './soa.style';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet} from 'react-native';

export default function Soa() {
  const [selectedSched, setSelectedSched] = useState('11AM');
  const [number, setNumber] = useState('');
  const [betLogs, setBetLogs] = useState([]);

  const AddBet = () => {
    const newData = [...betLogs, {selectedSched, number}];
    setBetLogs(newData);
    setSelectedSched('');
    setNumber('');
  };

  return (
    <View style={style.betContainer}>
      <View style={style.content}>
        <View style={style.titleSaveBtn}>
          <View>
            <Text style={style.betTitle}>Statement of Accounts</Text>
          </View>
          <TouchableOpacity style={style.saveOpacity}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.betTotal}>Total: ₱{'150'}</Text>
        <View style={style.formInput}>
          <View style={style.SchedNumber}>
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
          <View style={style.loginBtns}>
            <TouchableOpacity style={style.signinBtnOpacity} onPress={AddBet}>
              <Text style={style.btnText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.betTable}>
          {betLogs.map((logs, index) => (
            <View key={index}>
              <Text style={style.betLogsText}>Time: {logs.selectedSched}</Text>
              <Text style={style.betLogsText}>Number: {logs.number}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
