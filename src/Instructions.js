import { StyleSheet, Text, View} from 'react-native'

export function Instructions(){
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Instructions</Text>
            <Text style={styles.text}>
            Numerals must be entered using subtractive notation, e.g. 9 is equal to IX, not VIIII{'\n'}{'\n'}
            You can only enter a single operation per calculation{'\n'}{'\n'}
            Your answer will start the next calculation{'\n'}{'\n'}
            Press back to clear the last button pressed{'\n'}{'\n'}
            Press clear to clear everything
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      margin: '5%',
    },
    title:{
        marginTop: '10%',
        fontSize: 32,
        textAlign: "center",
        fontWeight: 'bold',
    },
    text: {
        margin: '5%',
        fontSize: 22,
        lineHeight: 28,
    }
  })