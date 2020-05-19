import React,{useEffect,useState} from 'react';
import {Country} from './Queries';
import {client} from './Client'


const CountryStat=(props)=>{

    const [countryData,setCountryData]=useState([]);
    const [result,setResult] = useState({});

    useEffect(()=>{requestData()},[])

    const requestData=()=>{
        client
        .query({
          query:Country
        })
        .then(res=>{
          console.log('RESPONSE===>',res)
          setCountryData(res.data.countries)
          console.log(countryData)
        })
        .catch(err=>{
          console.log('ERROR===>', err)
        })
      }

      const Static=()=>{

        countryData.forEach(()=>{
                if(props.id=== countryData.countryInfo.id){
                    setResult(countryData.result)
                }

                return
        })
      }