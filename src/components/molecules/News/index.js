import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const News = ({onPress}) => {
    return (
        <View style={{paddingTop:16, paddingHorizontal:16}}>
            <View style={{position:'relative', borderRadius:9, borderWidth:4, borderColor:'#1abc9c'}}>
                <Image source={require('../../../assets/News/rekrut.jpg')} style={{height:170, width:'100%', borderRadius:7}} />
            <View style={{
                width:'100%',
                height:'100%',
                position:'absolute',
                top:0,
                left:0,
                backgroundColor:'black',
                opacity:0.4,
                borderRadius:6
            }}></View>
            <View style={{height:50, width:50, position:'absolute', top:0, left:0}}>
                    <Image source={require('../../../assets/WelcomeAuth/welcomeauth.png')} style={{width:undefined, height:undefined, resizeMode:'contain', flex:1}} />
            </View>
            </View>
            <View style={{paddingTop:16, paddingBottom:20, borderBottomColor:'#1abc9c', borderBottomWidth:1}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#1abc9c'}}>ANNOUNCEMENT</Text>
                <Text style={{
                    fontSize:14,
                    fontWeight:'normal',
                    color:'#7a7a7a',
                    marginBottom:12,
                    textAlign:'justify'
                    }}>
                        Punya mobil pick-up dan ingin penghasilan tambahan? Atau punya usaha ojek pick-up dan ingin menjangkau lebih banyak pelanggan? Mari bergabung bersama kami!
                    </Text>

                    <TouchableOpacity style={{backgroundColor:'#1abc9c', paddingHorizontal:12, paddingVertical:11, alignSelf:'flex-end', borderRadius:15}} onPress={onPress}>
                        <Text style={{fontSize:13, fontWeight:'bold', color:'white', textAlign:'center'}}>DAFTAR</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default News;