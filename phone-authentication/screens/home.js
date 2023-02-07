import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons';

const {width} = Dimensions.get('screen');
let {ScreenHeight} = Dimensions.get("window").height;


export default function Home(){

    return (
       <ImageBackground style={{flex:1, alignItems:'center',justifyContent:'flex-end'}} source={require("../assets/images/homeImage.jpg")}>
           
            <Text>WELCOME!</Text>
            <Text style={{color:'#00495E', fontSize:20, fontWeight:'bold',}}>Record Revival</Text>
            <Text>Classics to New</Text>
            <Text>Releases: Vinyls Here</Text>
            <TouchableOpacity style={{backgroundColor:'#00495E', padding:18, borderRadius:8, marginTop:20, marginBottom:30, width:'90%'}}>
                    <Text style={{alignSelf:'center', color:'#fff'}}>Get In Touch</Text>
                </TouchableOpacity>
            
       </ImageBackground>
    )

}

// const styles = StyleSheet.create({
//     homeHeader: {
//         paddingVertical: 15,
//         paddingHorizontal:20,
//         flex:1,
//         flexDirection:'row',
//         justifyContent:'space-between',
//         backgroundColor:'#00495E',
//         // backgroundColor:'red'
//     },
//     homeTitle: {
//         color:'white',
//         fontWeight:'bold',
//         fontSize:23,
//         paddingTop:5,
//         // paddingHorizontal:20
//     },
//     homeSearch: {
//         height:60,
//         width: '100%',
//         backgroundColor:'white',
//         position:'absolute',
//         top:90,
//         borderRadius:10,
//         flexDirection:'row',
//         padding:20,
//         alignItems:'center',
//         // shadowColor: 'black',  
//         shadowOpacity: 0.6,
//         elevation:3,
//         // zIndex:999,
//     },
//     categoryContainer: {
//         marginTop:18,
//         marginHorizontal:20,
//         flexDirection:'row',
//         justifyContent:'space-between',
//     },
//     iconContainer: {
//         height:60,
//         width:75,
//         backgroundColor:'#eee',
//         alignItems:'center',
//         justifyContent:'center',
//         borderRadius:10,
//         backgroundColor:'#EDEFEF'
//     },
//     sectionTitle: {
//         marginHorizontal:20,
//         marginTop:20,
//         marginBottom:10,
//         fontWeight:'bold',
//         fontSize:20,
//         color:'#00495E'
//         // backgroundColor:'green'
//     },
// })