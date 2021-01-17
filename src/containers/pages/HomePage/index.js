import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import News from '../../../components/molecules/News';
import Promo from '../../../components/molecules/Promo';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeSaldo from '../../../containers/organisms/HomeSaldo';

class HomePage extends Component {
    render(){
        return(
        <View style={{flex:1}}>
            <ScrollView style={{flex:1, backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
            <HomeSaldo />
            <HomeMainFeature />
            <View style={{height:17, backgroundColor:'#f2f2f4', marginTop:20}}></View>
            <News onPress={() => this.props.navigation.navigate('NewsDetail')} />
            <Promo />
            </ScrollView>
            <NavBar />
        </View>
        )
    }
}

export default HomePage;