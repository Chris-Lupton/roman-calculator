import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Calculator } from './Calculator'
import { Instructions } from './Instructions'
import { Chart } from './Chart'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Calculator'  screenOptions={{headerShown:false, tabBarStyle:{height:'8%', backgroundColor:'#D9D9D9',}}}>
      <Tab.Screen name="Numeral Chart" component={Chart} 
         options={{
          tabBarAccessibilityLabel:"Numeral Chart",
          tabBarShowLabel:false,
          tabBarIcon: () => (
            <AntDesign name="table" size={32} color="#1A1A1A" />
          ),
        }}/>
      <Tab.Screen name="Calculator" component={Calculator} 
        options={{
          tabBarAccessibilityLabel:"Calculator",
          tabBarShowLabel:false,
          tabBarIcon: () => (
            <Entypo name="calculator" size={32} color="#1A1A1A" />
          ),
        }}/>
      <Tab.Screen name="Instructions" component={Instructions} 
        options={{
          tabBarAccessibilityLabel:"Instructions",
          tabBarShowLabel:false,
          tabBarIcon: () => (
            <FontAwesome name="info" size={32} color="#1A1A1A" />
          ),
        }}/>
    </Tab.Navigator>
  )
}