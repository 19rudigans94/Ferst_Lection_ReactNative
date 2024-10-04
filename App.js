import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import logo from './assets/icon.png';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !phone || !email || !address || !comment) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Введите корректный адрес электронной почты.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setComment('');
    setSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Регистрация на сайте</Text>

      <TextInput
        style={styles.input}
        placeholder="Введите ваше имя"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Введите ваш телефон"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Введите вашу почту"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Введите ваш адрес"
        value={address}
        onChangeText={setAddress}
        multiline
        placeholderTextColor="#666"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Введите ваш комментарий"
        value={comment}
        onChangeText={setComment}
        multiline
        placeholderTextColor="#666"
      />

      <Button title="Отправить" onPress={handleSubmit} color="#4CAF50" />

      {error && <Text style={styles.errorText}>{error}</Text>}

      {submitted && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Имя: {name}</Text>
          <Text style={styles.resultText}>Телефон: {phone}</Text>
          <Text style={styles.resultText}>Почта: {email}</Text>
          <Text style={styles.resultText}>Адрес: {address}</Text>
          <Text style={styles.resultText}>Комментарий: {comment}</Text>
          <Button title="Сбросить" onPress={handleReset} color="#4CAF50" />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
  result: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#4CAF50',
    backgroundColor: '#e8f5e9',
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    color: '#333',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

