//Complete the custom Input component based on the props that it expects to receive

import { useState } from "react";
import styled from "styled-components";

export const Input = ({
  type,size,variant,value,onChange
}) => {
  const Sixes={
    md:"150px",
    sm:"100px",
    lg:"180px",
    xl:"220px"
  };
  const heights={
    md:"30px",
    sm:'25px',
    lg:"40px",
    xl:"50px"
  }
  const styles={
    width:Sixes[size],
    
    height:heights[size],
   } 
  return <Wrapper>
    <input type={type} value={value} onChange={onChange} style={styles}/>
  </Wrapper>
};
const Wrapper=styled.div`
padding:10px;`