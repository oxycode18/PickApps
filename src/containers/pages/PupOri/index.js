import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import MapComponent from '../MapComponent';
import ActionButton from './ActionButton';

const PupOri = () => {
    return (
        <View>
            <View style={{marginTop:30, backgroundColor:'#1eb2a6'}}>
                <Text style={{textAlign:'center', marginBottom:5, fontSize:15, paddingVertical:6}}>Masukan Lokasi Jemput & Antar Anda</Text>
            </View>

            <View>
                <MapComponent />
            </View>

            <View style={{height:300}}>
                <ScrollView>
                <Text style={{textAlign:'center', marginBottom:5, paddingVertical: 55}}>Driver 1</Text>
                <Text style={{textAlign:'center', marginBottom:5, paddingVertical: 55}}>Driver 2</Text>
                <Text style={{textAlign:'center', marginBottom:5, paddingVertical: 55}}>Driver 3</Text>
                <Text style={{textAlign:'center', marginBottom:5, paddingVertical: 55}}>Driver 4</Text>
                <Text style={{textAlign:'center', marginBottom:5, paddingVertical: 55}}>Driver 5</Text>
                </ScrollView>
            </View>

            <View style={styles.letak}>
            <ActionButton
                        desc="" 
                        title="Pesan"
                    />
            </View>
        </View>
    )
};

const styles = {
    letak: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10,
    },
}

export default PupOri;