import React from 'react'
import {View,Text,TextInput,Image,TouchableOpacity} from 'react-native'

export default function screen_1()
{
    return(
        <View style={{flex:1, padding:10}}>
            <Text>
                Welcome, Jala
            </Text>
            <Text style={{fontWeight:"bold", fontSize:20}}>
                Choice you Best food
            </Text>
            <TextInput style={{borderWidth:1, borderColor:"gray", marginTop:10, height:40, width:"80%"}}
                placeholder='Search food'
            />
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                <TouchableOpacity style={{height:50, width:90, backgroundColor:"yellow", borderWidth:1}}>
                    <Text>Donut</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}