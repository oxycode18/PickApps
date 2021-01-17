import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';
import {withNavigation} from '@react-navigation/compat';

class HomeMainFeature extends Component {
    render(){
        return(
            <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:30}}>
                <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%', flexWrap:'wrap'}}>
                    <MainFeature onPress={() => this.props.navigation.navigate('InputLokasi')} title="Terbuka" img={require('../../../assets/icon/dalamkota.png')} />
                    <MainFeature onPress={() => this.props.navigation.navigate('InputLokasi')} title="Ternak" img={require('../../../assets/icon/puternak.png')} />
                    <MainFeature onPress={() => this.props.navigation.navigate('InputLokasi')} title="Material" img={require('../../../assets/icon/pumaterial.png')} />
                    <MainFeature onPress={() => this.props.navigation.navigate('InputLokasi')} title="Tertutup" img={require('../../../assets/icon/pututup.png')} />
                </View>
            </View>
        )
    }
}

export default withNavigation (HomeMainFeature);