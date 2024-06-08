import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

const ExerciseDetails = ({ route }) => {
  const { exercise } = route.params;


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image source={{ uri: exercise.gifUrl }} style={styles.image} />
      <Text style={styles.detail}>Equipment: {exercise.equipment}</Text>
      <Text style={styles.detail}>Target: {exercise.target}</Text>
      <Text style={styles.detail}>Secondary Muscles: {exercise.secondaryMuscles.join(', ')}</Text>
      <Text style={styles.instructionHeading}>Instructions</Text>
      <View style={styles.instructionContainer}>
        {exercise.instructions.map((instruction, index) => (
          <Text key={index} style={styles.instruction}>
            {'\u2022 '}{instruction.trim()}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  instructionHeading:{
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'left',
    marginTop: 20,
  },
  instructionContainer: {
    // marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  instruction: {
    paddingLeft:10,
    fontSize: 18,
    textAlign: 'left',
    marginTop: 20,
  },
});

export default ExerciseDetails;
