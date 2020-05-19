import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,ActivityIndicator,Modal,TouchableOpacity, ScrollView } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import CountryStat from './component/statistics';
import WorldStatics from './component/worldstatics';
import CountrySelect from './component/Modal';
import {client} from './component/Client';
import {World} from './component/Queries'

export default function App(props) {
  const [loading,setLoading]=useState(true)
  const [worldData,setWorldData]=useState([])
  // const [isVisible,setVisible]=useState(false);
  // const [date,setDate] = useState(0)
  // const {result} =props;
  console.log(props);

 useEffect(()=>{
    requestData()
  },[])

  const requestData=()=>{
    client
    .query({
      query: World
    })
    .then(res=>{
      console.log('RESPONSE===>',res)
      setLoading(res.loading)
      setWorldData(res.data.globalTotal)
    })
    .catch(err=>{
      console.log('ERROR===>', err)
    })
  }
  
 
 
  
  if(loading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size='large'/>
      </View>
    )
  }
  else{
    
  return (
    <View style={{flex:1,background:"#eee"}}>
      <View style={{flex:2,justifyContent:'flex-end',borderBottomWidth:1.5,borderBottomColor:"#aaa"}}>
         <Text style={{fontSize:22,fontWeight:'bold',marginLeft:20,marginBottom:10}}>COVID-19{"\n"} Worldwide</Text>
      </View>
      <View style={{flex:1.7,marginBottom:10,marginTop:20}}>
        {/* world statics side */}
 
        <WorldStatics
           confirmed={worldData.cases}
           recovered={worldData.recovered}
           deaths= {worldData.deaths}
 
        />
 
      </View> 
      <Text>Select Country</Text>
      <View style={{flex:4}}>
        {/* select country side */}
       <CountrySelect/>
      </View>
      {/* <View style={{flex:3,marginTop:20}}> */}
 {/* the statics section */}
{/*  
       <CountryStat 
         confirmed={result.cases}
         recovered={result.recovered}
         deaths={result.deaths}
         active={result.active}
         critical ={result.critical}
         test={result.tests}
       
       /> */}
      {/* </View> */}
      <View style={{flex:4,marginTop:20,justifyContent:'flex-end',flexDirection:'row'}}>
      <Text style={{marginRight:20}}>Last Update</Text>
     <Text style={{marginRight:20}}>{worldData.updated} </Text>
      </View>
      
    </View>
   );
  }



  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
