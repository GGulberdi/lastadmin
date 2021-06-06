import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react';

export default function Connect() {

    const getList=async()=>{
        try{
          let link= await axios.get('https://jsonplaceholder.typicode.com/posts')
          console.log(link)
        }
        catch(e){
          console.log(e)
        }
      }
      
      useEffect(()=>{
        getList()
      },[]);


    return (
        <div>
            hello from connetc
        </div>
    )
}
