import * as React from 'react';
import { StyleSheet, Text, Touchable, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default function Produtos() {
    return (
      
      <ScrollView>
        <View >                  
          <Text>Tela Para os Produtos</Text>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    prod:{
     // backgroundColor:'#000000',
     // padding:10,
     // width: 10,
      marginTop: 20,
    },
    produtos:{
      marginTop:100,
      backgroundColor: '#696969',
      padding:50,
      width: 15,
      marginTop: 2,
    }
  });