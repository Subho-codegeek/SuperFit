import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  const [data, setData] = useState([]);

  const apicall = async()=>{
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${item}`,
        params: {
          limit: '10',
          offset: '0'
        },
        headers: {
          'x-rapidapi-key': 'e0e4d4ced6msh5412058daf245a1p1ca6f7jsnd53dafffe11c',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
        //   console.log(response.data);
          setData(response.data);
      } catch (error) {
          console.error(error);
      }
  };

  useEffect(() => {
    apicall();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.exerciseContainer} onPress={() => navigation.navigate('ExerciseDetails', { exercise: item })}>
      <Text style={styles.exerciseTitle}>{item.name}</Text>
      <Image source={{ uri: item.gifUrl }} style={styles.exerciseImage} />
      <Text style={styles.exerciseDetails}>Equipment: {item.equipment}</Text>
      <Text style={styles.exerciseDetails}>Target: {item.target}</Text>
      <Text style={styles.exerciseDetails}>Secondary Muscles: {item.secondaryMuscles.join(', ')}</Text>
    </TouchableOpacity>
);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item}</Text>
      <FlatList
        scrollEnabled={false} // Disable scrolling
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    listContainer: {
      alignItems: 'center',
    },
    exerciseContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: width/1.2,
        height: height/2.5,
    },
    exerciseTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    exerciseImage: {
      width: 150,
      height: 150,
      marginBottom: 10,
    },
    exerciseDetails: {
      fontSize: 14,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  });

export default Details;
