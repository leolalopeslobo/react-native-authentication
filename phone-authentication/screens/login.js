// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import { MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';


export default function Login() {
    const [fontsLoaded] = useFonts({
        // "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("../assets/fonts/Nunito-Bold.ttf")
      });
    
      useEffect(() => {
        async function prepare() {
          await SplashScreen.preventAutoHideAsync();
        }
        prepare();
      }, []);
    
      if (!fontsLoaded) {
        return undefined;
      } else {
        SplashScreen.hideAsync();
      }

   

      return (
        // <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
            <View style={{backgroundColor:'#e4e4e4', paddingHorizontal:15, flex:1, justifyContent:'center'}}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Image source={require('../assets/images/logo.png')} />
                    <Text style={{color:'#00495E', fontSize:28, paddingLeft:10}}>Record Revival</Text>
                </View>
                

                <View style={{marginTop:20}}>
                    <Text style={{color:'#00495E'}}>Username</Text>
                    <TextInput placeholder='Enter your Username' style={{padding:16, borderWidth:1, borderColor:'#C3CFD5', borderRadius:8, marginTop:10}}></TextInput>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{color:'#00495E'}}>Phone Number</Text>
                    <TextInput placeholder='Enter your Phone Number' style={{padding:16, borderWidth:1, borderColor:'#C3CFD5', borderRadius:8, marginTop:10}}></TextInput>
                </View>

                <TouchableOpacity style={{backgroundColor:'#00495E', padding:18, borderRadius:8, marginTop:20}}>
                    <Text style={{alignSelf:'center', color:'#fff'}}>Log In</Text>
                </TouchableOpacity>

                {/* Google Login */}


          


                {/* Facebook Login */}
            </View>
        // </SafeAreaView>
      );
}
