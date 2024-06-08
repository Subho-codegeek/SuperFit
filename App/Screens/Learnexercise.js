import { Text, View, FlatList, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import arm1 from '../Assets/arm1.jpg'
import arm2 from '../Assets/arm2.jpg'
import back from '../Assets/back.jpg'
import chest from '../Assets/chest.jpg'
import legs1 from '../Assets/legs1.jpg'
import legs2 from '../Assets/legs2.jpg'
import neck from '../Assets/neck.jpg'
import shoulder from '../Assets/shoulder.jpg'
import waist from '../Assets/waist.jpg'
import cardio from '../Assets/cardio.jpg'

const Learnexercise = () => {

  const [data, setData] = useState([]);
  const [numColumns, setNumColumns] = useState(2);
  const navigation = useNavigation();

  const dummyData = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];
  
  const dummydata1 = [{name: "back", image: back}, {name: "chest", image: chest}, {name: "lower arms", image: arm1}, {name: "upper arms", image: arm2}, {name: "lower legs", image: legs1}, {name: "upper legs", image: legs2}, {name: "neck", image: neck}, {name: "shoulders", image: shoulder}, {name: "waist", image: waist}, {name: "cardio", image: cardio}]

  const apicall = async()=>{
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      headers: {
        'x-rapidapi-key': 'e0e4d4ced6msh5412058daf245a1p1ca6f7jsnd53dafffe11c',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   setTimeout(()=>{apicall()}, 1000);
  // }, []);

  console.log(dummydata1); // remove this later

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate('Explore', { item: item.name })}
    >
      <Text style={styles.boxText}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>SUPERFIT</Text>
        <Image source={require("../Assets/fitness.png")} style={{height:50, width:50}}/>
      </View>
      {/* <Button title="Toggle Columns" onPress={() => setNumColumns(numColumns === 2 ? 3 : 2)} /> */}
      <FlatList
        key={numColumns}
        data={dummydata1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navbar:{
    alignSelf: 'center', // Centers the navbar horizontally
    width: '95%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  box: {
    flex: 1,
    margin: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  boxText: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default Learnexercise