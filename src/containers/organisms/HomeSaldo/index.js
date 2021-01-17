import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SaldoFitur from '../../../components/molecules/SaldoFitur';

class HomeSaldo extends Component {
    render(){
        return(
            <View style={{marginHorizontal:17, marginTop:8}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#1eb2a6', borderTopLeftRadius:5, borderTopRightRadius:5, padding:14}}>
                    <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>SALDO</Text>
                    <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Rp500.000</Text>
                </View>
                <View style={{flexDirection:'row', paddingTop:20, paddingBottom:14, backgroundColor:'#1abc9c', borderBottomLeftRadius:5, borderBottomRightRadius:5}}>
                    <SaldoFitur title="Pay" img={require('../../../assets/icon/pay.png')}/>
                    <SaldoFitur title="Nearby" img={require('../../../assets/icon/nearby.png')}/>
                    <SaldoFitur title="Top Up" img={require('../../../assets/icon/topup.png')}/>
                    <SaldoFitur title="More" img={require('../../../assets/icon/more.png')}/>
                </View>
            </View>
        )
    }
}

export default HomeSaldo