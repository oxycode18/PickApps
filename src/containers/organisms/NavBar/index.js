import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import {withNavigation} from '@react-navigation/compat';

class NavBar extends Component {
    render(){
        return(
            <View style={{height:60, flexDirection:'row', backgroundColor:'white'}}>
                <NavBarIcon onPress={() => this.props.navigation.navigate('Home')} title="Home" img={require('../../../assets/icon/home-active.png')} active />
                <NavBarIcon onPress={() => this.props.navigation.navigate('Orders')} title="Orders" img={require('../../../assets/icon/orders.png')} />
                <NavBarIcon onPress={() => this.props.navigation.navigate('Inbox')} title="Inbox" img={require('../../../assets/icon/inbox.png')}/>
                <NavBarIcon onPress={() => this.props.navigation.navigate('Help')} title="Help" img={require('../../../assets/icon/help.png')}/>
                <NavBarIcon onPress={() => this.props.navigation.navigate('Account')} title="Account" img={require('../../../assets/icon/account.png')}/>
            </View>
        )
    }
}

export default withNavigation (NavBar);