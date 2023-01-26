import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { Text, View, ScrollView, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import tw from 'twrnc'
import {data} from './data'

export default function App() {
const [dataObj, setDataObj] = useState(data)
const isActive = 'border-red-400 border-t-2 border-l-yellow-200 border-l-2'
const notActive = 'border-gray-400 border-t-2 border-l-gray-200 border-l-2'

const sortedList = () => {
 const sortedData = dataObj.slice().sort((a,b) => {
  if(a.name > b.name){
      return 1
    }if(a.name < b.name){
      return -1
    } 
    return 0
  })
  setDataObj(sortedData)
}
  return (
    <ScrollView contentContainerStyle={tw`mb-5`}>
      <View style={tw`mt-4`}>
      <Text style={tw`text-center text-4xl font-bold`}>Investor List</Text>
      </View>
      <View style={tw`mx-40 mt-4`}>
        <Button title='Sort'
        onPress={
          () => {
            sortedList()
          }
        }
        />
      </View>
 {
  dataObj.map((item) => (
    <TouchableOpacity key={item._id} 
      style={tw`justify-between m-10 p-1 gap-2 rounded-md  shadow-md pl-5 ${item.isActive ? isActive : notActive}   sm:flex-row cursor-pointer`}
      >
      <Text style={tw`text-3xl font-bold mb-4 mt-4`}>{item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Balance: {item.balance}</Text>
      <Text style={tw`mb-6`}>Age: {item.age}</Text>
    </TouchableOpacity>
  ))
 }
    </ScrollView>
  );
}



