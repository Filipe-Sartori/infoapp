import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';


export default function Perfil() {
    return (
      <View style={styles.container01}>

      <TouchableOpacity style={styles.button01} onPress={()=> {}}>
      <Text> Alterar foto </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button01} onPress={()=> {}}>
      <Text> Endereços </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button01} onPress={()=> {}}>
      <Text> Alterar senha </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button01} onPress={()=> {}}>
      <Text> Sair </Text>
      </TouchableOpacity>
       
   </View>  
    );
  }

  const styles = StyleSheet.create({
    container01: {
      flex:1,
      alignItems:'center',
      margin:50,
    },
    button01:{
      alignItems:'center',
      backgroundColor: '#696969',
      padding:10,
      width: 300,
      marginTop: 2,
      borderRadius:15,

    },
  })