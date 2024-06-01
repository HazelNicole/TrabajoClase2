import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [Campo1, setCampo1] = useState('');
  const [Campo2, setCampo2] = useState('');
  const [Resultado, setResultado] = useState('');



  const sumar = () => {
    let val = parseFloat(Campo1) + parseFloat(Campo2);
    setResultado(val)

  }

  const restar = () => {
    let val = parseFloat(Campo1) - parseFloat(Campo2);
    setResultado(val)

  }

  const multiplicar = () => {
    let val = parseFloat(Campo1) * parseFloat(Campo2);
    setResultado(val)

  }

  const dividir = () => {
    let val = parseFloat(Campo1) / parseFloat(Campo2);
    setResultado(val)

  }

  const reset = () => {
    setCampo1('')
    setCampo2('')
    setResultado('')

  }



  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>Calculadora</Text>
      <>
        <View>
          <TextInput
            style={styles.Input}
            value={Campo1}
            onChangeText={setCampo1}
            keyboardType="numeric"
            placeholderTextColor="#f8f8ff"
            placeholder="Número 1" />

          <TextInput
            style={styles.Input}
            value={Campo2}
            onChangeText={setCampo2}
            keyboardType="numeric"
            placeholderTextColor="#f8f8ff"
            placeholder="Número 2" />
        </View>
        <View style={styles.ButtonsContainer}>
          <TouchableOpacity style={styles.sum} onPress={sumar}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          <TouchableOpacity style={styles.rest} onPress={restar}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
          <TouchableOpacity style={styles.mult} onPress={multiplicar}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
          <TouchableOpacity style={styles.div} onPress={dividir}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.reset} onPress={reset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
        <Text style={styles.Resultado}>{Resultado}</Text>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 70
  },
  MainTitle: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  Input: {
    marginBottom: 20,
    backgroundColor: 'purple',
    height: 70,
    width: 200,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  ButtonsContainer: {
    marginTop: 40,
    flexDirection: 'column',
    width: 50,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sum: {
    paddingTop: 2.5,
    paddingBottom: 2.5,
    marginTop: 10,
    width: '100%',
    backgroundColor: '#c71585',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rest: {
    paddingTop: 2.5,
    paddingBottom: 2.5,
    marginTop: 10,
    width: '100%',
    backgroundColor: '#db7093',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mult: {
    paddingTop: 2.5,
    paddingBottom: 2.5,
    marginTop: 10,
    width: '100%',
    backgroundColor: '#8b008b',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  div: {
    paddingTop: 2.5,
    paddingBottom: 2.5,
    marginTop: 10,
    width: '100%',
    backgroundColor: '#ba55d3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Resultado: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100
  },
  reset: {
    width: 230,
    marginTop: 80,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc0cb'
  }
});
