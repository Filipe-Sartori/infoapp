import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = ()=> {
    navigation.reset({
      index:0,
      routes:[{name:"Principal"}]
    })

  }

  return (
    <View style={styles.container}>

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
      title=" Entrar"
      icon={
        <Icon name="check" size={15} color="white"/>
      }
        onPress={()=> entrar()}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
