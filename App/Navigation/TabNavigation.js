import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Calorietracker from '../Screens/Calorietracker';
import Learnexercise from '../Screens/Learnexercise';
import Workoutplanner from '../Screens/Workoutplanner';
import Details from '../Screens/Details';
import ExerciseDetails from '../Screens/ExerciseDetails';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const LearnStack = createStackNavigator();

function LearnStackScreen() {
    return (
      <LearnStack.Navigator initialRouteName="Learnexercise" screenOptions={{headerShown:true}}>
        <LearnStack.Screen name="Learnexercise" component={Learnexercise} options={{ headerShown: false }} />
        <LearnStack.Screen name="Explore" component={Details} />
        <LearnStack.Screen name="ExerciseDetails" component={ExerciseDetails} />
      </LearnStack.Navigator>
    );
  }

export default function MyTabs() {
    
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle: {height: 50}}}>
      <Tab.Screen name="Learn" component={LearnStackScreen} 
        options={{
            tabBatLabel: "Learn",
            tabBarIcon: ({color,size}) => (
                <Ionicons name="barbell" color={color} size={size} />
            )
        }}
      />
      <Tab.Screen name="Calorie Cal" component={Calorietracker} 
        options={{
            tabBatLabel: "Calorie Cal",
            tabBarIcon: ({color,size}) => (
                <Ionicons name="calculator" color={color} size={size} />
            )
        }}
      />
      <Tab.Screen name="Planner" component={Workoutplanner} 
        options={{
            tabBatLabel: "Planner",
            tabBarIcon: ({color,size}) => (
                <Ionicons name="list" color={color} size={size} />
            )
        }}
      />
    </Tab.Navigator>
  );
}
