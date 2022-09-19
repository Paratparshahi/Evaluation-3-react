//Complete the custom Input component based on the props that it expects to receive
import { Component, useState } from "react";
import styled from 'styled-components'
export const Buttons = ({
  colorScheme,size,variant
}

) => {
  const [colors,setColor]=useState(colorScheme);
  const [sizes,setsize]=useState(size);
  const [variants,setvariant]=useState(variant);
  const Sixes={
    md:"150px",
    sm:"100px",
    lg:"180px",
    xl:"220px"
  }
  const heights={
    md:"30px",
    sm:'25px',
    lg:"40px",
    xl:"50px"
  }
 const styles={
  width:Sixes[size],
  background:colors,
  height:heights[size],
 } 

  return(
    <button style={styles}>
      Heloo
    </button>
  )
};

