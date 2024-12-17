import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
// import Dashboard from './(tabs)/index'
import "../global.css";
const index = () => {
  return (
    <View className='bg-blue-500 flex h-full justify-center'>
        {/* <Dashboard /> */}
        <Text className='text-center text-4xl font-bold'>ENTRYYYY POINT</Text>
      {/* <Link href = "./(tabs)">Go to Dashbaord</Link> */}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        //backgroundColor: "red"
    }
})
