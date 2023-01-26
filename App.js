import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { Text, View, ScrollView } from 'react-native';
import tw from 'twrnc'
import {data} from './data'

export default function App() {
const [dataObj] = useState(data)
  return (
    <ScrollView contentContainerStyle={tw`mb-5`}>
      <Text style={tw`text-center text-4xl font-bold`}>Investor List</Text>
 {
  dataObj.map((item) => (
    <View key={item._id} 
      style={tw`justify-between m-10 p-1 gap-2 rounded-md border-red-400 border-t-2 shadow-md pl-5 border-l-yellow-200 border-l-2 sm:flex-row`}
      >
      <Text style={tw`text-3xl font-bold mb-4 mt-4`}>{item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Balance: {item.balance}</Text>
      <Text style={tw`mb-6`}>Age: {item.age}</Text>
    </View>
  ))
 }
    </ScrollView>
  );
}



