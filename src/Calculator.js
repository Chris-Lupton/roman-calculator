import { StyleSheet, Text, View, Pressable, FlatList, ScrollView} from 'react-native'
import { useState, useEffect } from 'react'
import { calculate } from './utils/formula'

const nums = ['Clear', 'Back', '¯', '+', 'M', 'D', 'C', '-', 'L', 'X', 'V', '*', 'I', 'S', '•', '/',]

export function Calculator() {

  const [calculation, setCalculation] = useState('')
  const [lastCalculation, setLastCalculation] = useState('')
  const [decimalAnswer, setDecimalAnswer] = useState('')
  const [invalid, setInvalid] = useState(['+', '-', '*', '/'])
  const [isOverline, setIsOverline] = useState(false)

  useEffect(() => {
    switch (calculation.at(-1)) {
      case '•':
        calculation.endsWith('•••••') ? setInvalid(['M', 'D', 'C', 'L', 'X', 'V', 'I', 'S', '•']) : setInvalid(['M', 'D', 'C', 'L', 'X', 'V', 'I', 'S'])
        break
      case 'S':
        setInvalid(['M', 'D', 'C', 'L', 'X', 'V', 'I', 'S'])
        break
      case 'I':
        calculation.endsWith('III') ? setInvalid(['M', 'D', 'C', 'X', 'L', 'V', 'I']) :
        calculation.endsWith('II') ? setInvalid(['M', 'D', 'C', 'X', 'L', 'V']) : setInvalid(['M', 'D', 'C', 'L'])
        break
      case 'V':
        calculation.endsWith('IV') ? setInvalid(['M', 'D', 'C', 'L', 'X', 'V', 'I']) : setInvalid(['M', 'D', 'C', 'L', 'X', 'V'])
        break
      case 'X':    
        calculation.endsWith('XXX') ? setInvalid(['M', 'D', 'C', 'L', 'X']) : 
        calculation.endsWith('XX') ? setInvalid(['M', 'D', 'C', 'L']) : 
        calculation.endsWith('IX') ? setInvalid(['M', 'D', 'C', 'L', 'X', 'V', 'I']) : setInvalid(['M', 'D'])
        break
      case 'L':
        calculation.endsWith('XL') ? setInvalid(['M', 'D', 'C', 'L', 'X']) : setInvalid(['M', 'D', 'C', 'L'])
        break
      case 'C':
        calculation.endsWith('CCC') ? setInvalid(['M', 'D', 'C']) : 
        calculation.endsWith('CC') ? setInvalid(['M', 'D']) : 
        calculation.endsWith('XC') ? setInvalid(['M', 'D', 'C', 'L', 'X']) : setInvalid([])
        break
      case 'D':
        calculation.endsWith('CD') ? setInvalid(['M', 'D', 'C']) : setInvalid(['M', 'D'])
        break
      case 'M':
        calculation.endsWith('CM') ? setInvalid(['M', 'D', 'C']) : setInvalid([])
        break
      default:
        setInvalid(['+', '-', '*', '/'])
    }
    if(/[+|\-|*|/]/.test(calculation)){
      setInvalid((currInvalid) => {
        const copyInvalid = [...currInvalid]
        copyInvalid.push('+', '-', '*', '/')
        return copyInvalid
      })
    }
  }, [calculation])
  
  function handlePress(item) {
    if(item === 'Clear'){
      setCalculation('')
      setLastCalculation('')
      setDecimalAnswer('')
    } else if (item === 'Back'){
      setCalculation(calculation.slice(0,-1))
    } else if (item === '¯'){
      setIsOverline(!isOverline)
    } else if (!invalid.includes(item)){
      setCalculation(calculation + item)
      setIsOverline(false)
    }
  }

  function handleSubmit(){
    if(calculation){
      const { sum, decimalValue, romvanValue} = calculate(calculation)
      setDecimalAnswer(`${sum} = ${decimalValue}`)
      setLastCalculation(calculation) 
      setCalculation(romvanValue)
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.screen}>
          <Text style={styles.screenText}>{decimalAnswer}</Text>
        </View>
        <View style={styles.screen}>
          <Text style={styles.screenText}>{lastCalculation}</Text>
        </View>
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.screenText}>{calculation}</Text>
          </ScrollView>
        </View>
        <View style={styles.numpad}>
            <FlatList
            data={nums}
            numColumns={4}
            renderItem={({item}) => (
              <Pressable style={invalid.includes(item) ? styles.invalid : styles.pressable} onPress={()=>{handlePress(item)}}><Text style={invalid.includes(item) ? styles.invalidText : styles.text}>{item}</Text></Pressable>
            )}
            keyExtractor={(item) => item}
            />
        </View>
          <Pressable style={styles.equals} onPress={handleSubmit}><Text style={styles.text}>=</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  calculator : {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: '6%',
  },
  numpad : {
    flex: 4,
    marginTop: 25,
    marginHorizontal: "auto",
    width: '100%',
    maxWidth: 400,
  },
  pressable: {
    flex: 1,
    width: '23%',
    backgroundColor: '#D3D3D3',
    alignItems: "center",
    justifyContent:"center",
    margin: '1%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "gray",
    paddingVertical: 20,
  },
  equals : {
    flex: 1,
    width: '46%',
    backgroundColor: '#D3D3D3',
    alignItems: "center",
    justifyContent:"center",
    margin: '1%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "gray",
    maxHeight: 70,
  },
  screen : {
    paddingHorizontal: 20,
    backgroundColor: '#D3D3D3',
    height: 50,
    width: '100%',
    maxWidth: 400,
    marginHorizontal: "auto",
    marginTop: 12,
    justifyContent:"center",
    borderRadius: 10,  
  },
  scroll : {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text : {
    textAlign:"center",
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#1A1A1A'
  },
  screenText: {
    textAlign:"right",
    width: '100%',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#1A1A1A',
  },
  invalid : {
    flex: 1,
    width: '23%',
    backgroundColor: '#D9D9D9',
    alignItems: "center",
    justifyContent:"center",
    margin: '1%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E6E6E6',
    paddingVertical: 20,
  },
  invalidText :{
    textAlign:"center",
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
})