import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import { Input } from '../../../components';
import ActionButton from './ActionButton';
import CheckBox from '@react-native-community/checkbox';
import { colors } from '../../../utils';

import { DestinationButton } from './../../../components/atoms/DestinationButton';

const InputLokasi = () => {
    const [form, setForm] = useState({
        lokasiPU: '',
        detailPU: '',
        kontakPU: '',
        lokasiDO: '',
        detailDO: '',
        kontakDO: '',
    });
 
    const sendData = () => {
        console.log('data yang dikirim: ', form);
    };

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={{paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingBottom:15, borderBottomColor:'#000000', borderBottomWidth: 2}}>
                <Text style={{fontSize: 15, fontWeight:"bold"}}>Alamat Pick-Up/Lokasi Pengambilan</Text>
                <Text style={{fontSize: 12, paddingTop: 5}}>Ini Input Lokasi GoogleMaps</Text>
                    <Input 
                        placeholder="Diedit Soon"


                    />
                <Text style={{fontSize: 12, paddingTop: 5}}>Tambahkan Detail Alamat</Text>
                    <Input 
                        placeholder="Gang, no dan warna rumah atau Bangunan Mencolok di Sekitar"
                        value={form.detailPU}
                        onChangeText={(value) => onInputChange(value, 'detailPU')}
                        />
                <Text style={{fontSize: 12, paddingTop: 5}}>Kontak Pengirim Yang Bisa Dihubungi</Text>
                    <Input 
                        placeholder="Nomor Whatsapp atau Telepon"
                        value={form.kontakPU}
                        onChangeText={(value) => onInputChange(value, 'kontakPU')}
                    />
            </View>

            <View style={{paddingBottom:15, borderBottomColor:'#000000', borderBottomWidth: 2}}>
                <Text style={{fontSize: 15, fontWeight:"bold", paddingTop: 10}}>Alamat Drop-Out/Lokasi Pengantaran</Text>
                <Text style={{fontSize: 12, paddingTop: 5}}>Ini Input Lokasi GoogleMaps</Text>
                    <Input 
                        placeholder="Diedit Soon"
                        
                        
                    />
                <Text style={{fontSize: 12, paddingTop: 5}}>Tambahkan Detail Alamat</Text>
                    <Input 
                        placeholder="Gang, no dan warna rumah atau Bangunan Mencolok di Sekitar"
                        value={form.detailDO}
                        onChangeText={(value) => onInputChange(value, 'detailDO')}
                    />
                <Text style={{fontSize: 12, paddingTop: 5}}>Kontak Penerima Yang Bisa Dihubungi</Text>
                    <Input 
                        placeholder="Nomor Whatsapp atau Telepon"
                        value={form.kontakDO}
                        onChangeText={(value) => onInputChange(value, 'kontakDO')}
                    />
            </View>

            <View style={{paddingBottom:15, borderBottomColor:'#000000', borderBottomWidth: 2}}>
            <View style={{paddingTop:10, flexDirection:'row'}}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={{color:colors.default, fontSize:14, paddingTop:4}}>Perlu Bantuan Bongkar Muat?</Text>
            </View>

            <View>
                <Text style={{fontSize: 8, textAlign:'justify', paddingLeft: 33}}>
                    Driver akan membantu anda melakukan bongkar-muat barang yang akan anda bawa. Tindakan ini akan dikenakan biaya tambahan sebesar Rp20.000. Silahkan centang kotak yang tersedia jika anda memerlukan bantuan.
                </Text>
            </View>
            </View>

            <View style={{paddingTop: 10, paddingBottom:10, borderBottomColor:'#000000', borderBottomWidth: 2}}>
                <Text style={{color: '#000000', fontSize: 12}}>Total Biaya</Text>
            </View>

            <View style={{alignSelf:"center"}}>
                <ActionButton
                    desc="" 
                    title="Input"
                    onPress={sendData}
                />
            </View>
            </ScrollView>
        </View>
    )
};

export default InputLokasi;