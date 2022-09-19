import { useState } from "react";

/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
export const useCounter = ({initialValue,minValue,maxValue}) => {
  
  const [countValue,setcountValue]=useState(initialValue)
  //console.log(initialValue,maxValue,minValue)
  var res;
  const incCount = (num) => {
      if(countValue+num>=maxValue){
        setcountValue(maxValue)
      }
      else if(num==undefined){
        setcountValue(countValue+1)
      }
      else{
        setcountValue(countValue+num);
      }
     

  };
  
  const decCount = (num) => {
    if(countValue-num<=minValue){
      setcountValue(minValue)
    }
    else if(num==undefined){
      setcountValue(countValue)
    }
    else{
      setcountValue(countValue-num)
    }
  };
  
  return {
    countValue,
    incCount,
    decCount,
  };
};
