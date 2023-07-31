import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ExStyle as style} from './expenses.style';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default function Expenses() {
  const [selectedType, setSelectedType] = useState('Cash Advance');
  const [amount, setAmount] = useState('');
  const [exLogs, setExLogs] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tempTotal = exLogs.reduce((accumulator, item) => accumulator + parseFloat(item.amount), 0);
    setTotal(tempTotal)
  }, [exLogs]);

  const AddExpenses = () => {
    const newData = [...exLogs, {selectedType, amount}];
    setExLogs(newData);
    setSelectedType('Cash Advance');
    setAmount('');
  };

  const saveExpenses = async () => {
    try {
      for (const exLog of exLogs) {
          const response = await axios.post('http://10.0.2.2:8000/expenses', {
            date: '2023-07-06',
            type: exLog.selectedType,
            status: 'active',
            amount: exLog.amount,
            user_ID:'1'
          });
        // setData(response.data);
      }
      Alert.alert('Success', 'Expenses saved!');i
    } catch (error) {
      Alert.alert('Error', 'Error saving!');
    }
  };
  const deleteData = (itemId) => {
    const newExLogs = exLogs.filter((val, index) => {
      if(index !== itemId) {
        return true;
      }
    })
    setExLogs(newExLogs);
  };

  return (
    <View style={style.container}>
        <View style={style.header}>
          <View>
            <Text style={style.title}>Expenses</Text>
          </View>
          <TouchableOpacity style={style.saveOpacity} onPress={saveExpenses}>
            <Text style={style.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View>
        <Text style={style.amountTotal}>Total: ₱{total}</Text>
        </View>
      <View style={style.contentBox}>
          <View style={style.formInput}>
            <Text style={style.label}>Type</Text>
            <View style={style.schedNumber}>
              <Picker
                selectedValue={selectedType}
                onValueChange={selectedType => setSelectedType(selectedType)}
                style={style.drop}>
                <Picker.Item label="Cash Advance" value="Cash Advance" />
                <Picker.Item label="Petty Cash" value="Petty Cash" />
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

            <TouchableOpacity style={style.addOpacity} onPress={AddExpenses}>
              <Text style={style.btnText}>Add</Text>
            </TouchableOpacity>
        
        <View style={style.horizontalLines} />
        <ScrollView style={style.resTable}>
          {exLogs.map((logs, index) => (
            <View key={index} style={style.resView}>
                <View style={{width:250}}>
                  <Text style={style.logsText}>{logs.selectedType}</Text>
                  <Text style={style.logsText}>{logs.amount}</Text>
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
