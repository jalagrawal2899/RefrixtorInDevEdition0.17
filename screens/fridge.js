import React, { Component } from 'react';
import {  View, TouchableOpacity, StyleSheet, Image, Text, ScrollView } from 'react-native';
import AppHeader from '../assets/appHeader';
import { Card } from 'react-native-paper';
import Btn from './Btn';
import Btn1 from './Btn';



export default class Fridge extends Component {
    render() {
        return (
             <View >
                <AppHeader/>
              <ScrollView>
               <Btn/>
               <Btn1/>
                </ScrollView>
            </View>
            
        )
    }
}
const styles=StyleSheet.create({
  image:{
    marginLeft:20,
    width:50,
    height:50,
    marginTop:2
  },
  cardText:{
     marginLeft:90,
     color:'white',
     fontWeight:'bold',
     marginTop:-35
  },
  button:{
    backgroundColor:'green',
    width:320,
    marginLeft:20,
    marginTop:20,
    height:55
  }
})

