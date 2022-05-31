import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, CheckBox, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [isSelected,  setSelected] = useState(false)

  // salvar botão
  const salvar = ()=> {
      console.log("Salvou")
  }

  
  

  return (
    <View style={[styles.container, specificStyle.specificstyleContainer]}>

      <Text h3>Cadastre - se</Text>
      <Input placeholder="E-mail" 
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />

      <Input placeholder="Senha" 
      onChangeText={value => setPassword(value)}
      keyboardType="number-pad"
      />

      <Input placeholder="Nome" 
      onChangeText={value => setNome(value)}
      />

      <Input placeholder="CPF" 
      onChangeText={value => setCpf(value)}
      keyboardType="number-pad"
      returnKeyType='done'

      />

      <Input placeholder="Telefone" 
      onChangeText={value => setTelefone(value)}
      keyboardType="phone-pad"
      returnKeyType='done'
      />
      
        <CheckBox
            title="Eu aceito os termos de uso"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor='green'
            uncheckedColor='red'
            checked={isSelected}
            onPress={()=> setSelected(!isSelected)}
        />

      <Button      
      icon={
        <Icon name="check" size={15} color="white"/>
      }
      title=" Salvar"
      buttonStyle={specificStyle.button}
      onPress={()=> salvar()}
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
}
);

  const specificStyle = StyleSheet.create({
    specificstyleContainer:{
      backgroundColor:"#fff"
    },
    button:{
      width: "100%",
      margin:10
    }
  })
  


