import { StyleSheet, Text, View, FlatList } from 'react-native'

const numerals = ['M',1000,'CM',900,'D',500,'CD',400,'C',100,'XC',90,'L',50,'XL',40,'X',10,'IX',9,'V',5,'IV',4,'I',1,'S',0.5,'•','1/12']

export function Chart(){

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Roman Numerals</Text>
      <View style={styles.chart}>
        <FlatList
          data={numerals}
          numColumns={2}
          renderItem={({item}) => (
          <Text style={styles.chartItem}>{item}</Text>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
    },
    chart : {
        flex: 2,
        width: '60%',
        maxWidth: 300,
      },
      chartItem: {
        flex: 1,
        width: '50%',
        backgroundColor: '#D3D3D3',
        alignItems: "center",
        justifyContent:"center",
        textAlign:"center",
        borderWidth: 1,
        borderColor: "gray",
        fontSize: 22,
        padding: 2,
      },
      text: {
        marginVertical: '5%',
        fontSize: 32,
        textAlign: "center",
        fontWeight: 'bold',
        width: '100%',
    },
  })