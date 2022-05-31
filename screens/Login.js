import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  


  // ações dos botoes
  const entrar = ()=> {
    navigation.reset({
      index:0,
      routes:[{name:"Principal"}]
    })
  }
  // botao navega para pg de cadastro
  const cadastrar = ()=> {
    navigation.navigate("Cadastro")
  }

  return (
    <View style={[styles.container, specificStyle.specificstyleContainer]}>

      <Text h3>Login</Text>
      <Input placeholder="E-mail" leftIcon={{type:'font-awesome',name:'envelope' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />
      <Input placeholder="Senha" leftIcon={{type:'font-awesome',name:'lock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />

      <Button      
      icon={
        <Icon name="check" size={15} color="white"/>
      }
      title=" Entrar"
      buttonStyle={specificStyle.button}
      onPress={()=> entrar()}
      />

      <Button
      icon={
        <Icon name="user" size={15} color="white"/>
      }
      title=" cadastrar"
      buttonStyle={specificStyle.button}
      onPress={()=> cadastrar()}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
);

  const specificStyle = StyleSheet.create({
    specificstyleContainer:{
      backgroundColor:"#FFFFFF"

    },
    button:{
      alignItems:'center',
      backgroundColor: '#696969',
      padding:10,
      width: 150,
      marginTop: 2,
      borderRadius:15,
    }
  })
  


