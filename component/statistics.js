import React,{useEffect,useState} from 'react';
import {View,Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const CountryStat=(props)=>{
      

    return(
        <View style={{flex:1,background:'#fff'}}>
            <View style={{flex:0.7,flexDirection:'row',alignItems:'center',marginLeft:10}}>
                <Ionicons
                    name='ios-stats'
                    size={25}
                    color="#009"
                
                />
                <Text style={{fontWeight:'bold',fontSize:15,marginLeft:10}}>Statistics</Text>
            </View>
            <View style={{flexDirection:'row',flex:1}}>
                <View style={{borderRightWidth:0.3,flex:1,justifyContent:'center',paddingLeft:10,borderRightColor:"#ddd"}}>
                    <Text style={{color:"#009",fontWeight:'bold'}}>Confirmed</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.confirmed}</Text>
                </View>
                <View style={{borderRightWidth:0.3,flex:1,justifyContent:'center',paddingLeft:10,borderRightColor:"#ddd"}}>
                    <Text style={{color:"#090",fontWeight:'bold'}}>Recovered</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.recovered}</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',paddingLeft:10,borderRightColor:"#ddd"}}>
                    <Text style={{color:"#900",fontWeight:'bold'}}>Death</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.deaths} </Text>
                </View>
             </View>
             <View style={{flexDirection:'row',flex:1}}>
                <View  style={{borderRightWidth:0.3,flex:1,justifyContent:'center',paddingLeft:10,borderRightColor:"#ddd"}}>
                    <Text style={{color:"#fa0",fontWeight:'bold'}}>Active</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.active}</Text>
                </View>
                <View  style={{borderRightWidth:0.3,flex:1,justifyContent:'center',paddingLeft:10,borderRightColor:"#ddd"}}>
                    <Text style={{color:"#900",fontWeight:'bold'}}>Critical</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.critical}</Text>
                </View>
                <View  style={{flex:1,justifyContent:'center',paddingLeft:10}}>
                    <Text style={{color:"#009",fontWeight:'bold'}}>Tests</Text>
                    <Text style={{fontWeight:'900',fontSize:18,color:"#444"}}>{props.test} </Text>
                </View>
             </View>
        </View>
    )
}

export default CountryStat;