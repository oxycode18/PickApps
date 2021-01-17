import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const Promo = () => {
    return (
        <View style={{padding:16}}>
            <View style={{position:'relative', borderRadius:9, borderWidth:4, borderColor:'#1abc9c'}}>
                <Image source={require('../../../assets/promo/diskon.jpg')} style={{height:170, width:'100%', borderRadius:7}} />
            <View style={{
                width:'100%',
                height:'100%',
                position:'absolute',
                top:0,
                left:0,
                backgroundColor:'black',
                opacity:0.5,
                borderRadius:6
                }}></View>
            <View style={{height:50, width:50, position:'absolute', top:0, left:0}}>
                <Image source={require('../../../assets/WelcomeAuth/welcomeauth.png')} style={{width:undefined, height:undefined, resizeMode:'contain', flex:1}} />
            </View>
            <View style={{position:'absolute', bottom:0, left:0, width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingBottom:16}}>
            <View>
                <Text style={{fontSize:18, fontWeight:'bold', color:'#1abc9c', marginBottom:8}}>Claim Voucher!</Text>
                <Text style={{fontSize:12, fontWeight:'400', color:'#1abc9c'}}>Gratis Biaya Bongkar-Muat</Text>
            </View>
            <View style={{flex:1, paddingLeft:12}}>
                <TouchableOpacity style={{backgroundColor:'#1abc9c', paddingHorizontal:12, paddingVertical:11, alignSelf:'stretch', borderRadius:15}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'white', textAlign:'center'}}>GET VOUCHER</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
      <View style={{paddingBottom:16, borderBottomColor:'#1abc9c', borderBottomWidth:1, marginTop:5}}></View>      
    </View>
    )
}

export default Promo;