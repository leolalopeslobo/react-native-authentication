// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import Home from './screens/home';
import Otp from './src';

export default function App() {
  return (
    // <Login />
    // <Home />
    <View style={styles.container}>
      <Otp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});