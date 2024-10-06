import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [panjang, setPanjang] = useState('');
  const [lebar, setLebar] = useState('');
  const [luas, setLuas] = useState(0);

  const hitungLuas = () => {
    const hasil = parseFloat(panjang) * parseFloat(lebar);
    if (!isNaN(hasil)) {
      setLuas(hasil);
    } else {
      setLuas(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hitung Luas Persegi Panjang</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Masukkan Panjang"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={panjang}
        onChangeText={setPanjang}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Masukkan Lebar"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={lebar}
        onChangeText={setLebar}
      />
      
      <TouchableOpacity style={styles.button} onPress={hitungLuas}>
        <Text style={styles.buttonText}>Hitung</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Luas Persegi Panjang:</Text>
        <Text style={styles.result}>{luas}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '80%',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 18,
    color: '#333',
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 10,
  },
});
