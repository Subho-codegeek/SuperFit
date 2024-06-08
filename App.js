import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your apppp!</Text>
      <StatusBar style="auto" /> */}
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
});
