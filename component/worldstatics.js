import React from 'react';
import {View,Text} from "react-native";
import {Fontisto} from "@expo/vector-icons"

const WorldStatics=(props)=>{
    return(
        <View style={{flex:1,background:'#fff',margin:5,borderRadius:4}}>
            <View style={{flex:2,flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                <Fontisto
                    name="world"
                    size={26}
                    color="#009"
                
                />
                <Text style={{fontWeight:'bold',fontSize:15,marginLeft:10}}>Worldwide Statistics</Text>
            </View >
            <View style={{flexDirection:'row',justifyContent:'space-between',flex:'3',paddingHorizontal:10,}}>
                <View style={{borderRightWidth:0.3,flex:1,justifyContent:'center',paddingLeft:10,borderRightColor:"#ddd"}}>
                    <Text style={{color:"#009",fontWeight:'bold'}}>Confirmed</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.confirmed}</Text>
                </View>
                <View  style={{borderRightWidth:0.4,flex:1,justifyContent:'center',paddingLeft:20,borderRightColor:"#ddd"}}>
                    <Text style={{color:"#090",fontWeight:'bold'}}>Recovered</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.recovered}</Text>
                </View>
                <View  style={{flex:1,justifyContent:'center',paddingLeft:20}}>
                    <Text style={{color:"#900",fontWeight:'bold'}}>Deaths</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.deaths}</Text>
                </View>
            </View>
            
        </View>
    )
}

export default WorldStatics;