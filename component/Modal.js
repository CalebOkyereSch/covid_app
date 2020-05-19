import React,{useEffect,useState} from 'react';
import {Modal,View,TouchableOpacity,ScrollView,Image,Text} from 'react-native';
import {Country} from './Queries';
import {Ionicons} from '@expo/vector-icons';
import {client} from './Client'
import CountryStat from './statistics'


const CountrySelect=()=>{

    const [countryData,setCountryData]=useState([])
    const [isVisible,setVisible]=useState(false);
    const [result,setResult] = useState({});
    const[countryInfo,setCountryInfo] = useState({})



    useEffect(()=>{requestData()},[])

    
    const requestData=()=>{
        client
        .query({
          query:Country
        })
        .then(res=>{
          console.log('RESPONSE===>',res)
          setCountryData(res.data.countries)
        })
        .catch(err=>{
          console.log('ERROR===>', err)
        })
      }

      const findId =(id)=>{
           countryData.forEach((item)=>{
            if (item.countryInfo._id == id){
              // console.log(item);
              setVisible(false);
              setResult(item.result);
              setCountryInfo(item.countryInfo)
              return;
              
              
            }
        
          })
  
          
  }



    return(
        <View style={{flex:1}}>
            <View style={{flex:0.5,background:'#fff'}}>
                <TouchableOpacity onPress={()=>{ setVisible(!isVisible) }}  style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Ionicons
                        name="ios-arrow-dropdown"
                        size={20}
                    
                    />
                    <View><Text>{countryInfo.ios3} </Text></View>
                     <Image
                             source={countryInfo.flag}
                              style={{width:20,height:20,}}
                             resizeMode="contain"
                    />
                        
                </TouchableOpacity>
                <Modal
                animationType={'none'}
                transparent={false}
                visible={isVisible}

                >
                <View style={{justifyContent:'center',alignItems:'center',height:480,background:'#fff',borderWidth:5,borderColor:'#ddd',width:300}}>
                    <ScrollView>
                        {
                            countryData.map((item,index)=>(
                                <View  key={item.countryInfo._id}>
                                    <TouchableOpacity  onPress={()=>{findId(item.countryInfo._id)}} style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                                        <Image
                                            source={item.countryInfo.flag}
                                            style={{width:20,height:20,}}
                                            resizeMode="contain"
                                        />
                                        <Text>{item.country} </Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>

                </Modal>
                </View>
                <View style={{flex:3,marginTop:20}}>
                <CountryStat 
                        confirmed={result.cases}
                        recovered={result.recovered}
                        deaths={result.deaths}
                        active={result.active}
                        critical ={result.critical}
                        test={result.tests}
                />
                </View>



        </View>
    )
}

export default CountrySelect;