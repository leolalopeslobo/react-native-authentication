import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import useAuth from './hooks/useAuth';

export default function App() {
  const { signinWithGoogle, loading } = useAuth();

  return (
    <View style={styles.container}>
    {/* <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" /> */}
    <TouchableOpacity onPress={signinWithGoogle}><Text>Google Login</Text></TouchableOpacity>
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
