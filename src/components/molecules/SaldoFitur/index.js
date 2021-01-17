import React from 'react';
import {View, Image, Text} from 'react-native';

const SaldoFitur = (props) => {
  return(
    <View style={{flex:1, alignItems:'center'}}>
      <Image source={props.img} />
      <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:15}}>{props.title}</Text>
    </View>
  )
}

export default SaldoFitur;