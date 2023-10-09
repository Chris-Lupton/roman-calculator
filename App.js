import { StyleSheet, View, } from 'react-native'
import { MyTabs } from './src/MyTabs'
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <MyTabs/>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 15,
  },
})
