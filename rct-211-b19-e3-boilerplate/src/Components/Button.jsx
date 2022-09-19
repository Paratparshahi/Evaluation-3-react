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
    md:"200px",
    sm:"100px",
    lg:"300px",
    xl:"400px"
  }
  const Button=styled.button`
    background:${colors};
     width:${Sixes[sizes]}
`

  return(
    <Button>
      Heloo
    </Button>
  )
};

