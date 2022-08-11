import React from "react";
import { useState } from "react";
import {FaQrcode} from 'react-icons/fa'
import { QRCODECANVAS } from "./pages/qrcode";
import {
Title,
Container,
MainInput,
InputPrimary,
ButtonPrimary

} from './styled'

function App() {
const [text, setText] = useState ('')

  return (
    <Container>
      <Title>
        QRcode generation 
      </Title>
        <FaQrcode  size= '3rem' color= 'brown' /> 

        <MainInput>

         <InputPrimary 
         placeholder="digite a URL :"
         onChange={(element) => {setText(element.target.value)}} value={text}
         />
           
         </MainInput>
         <QRCODECANVAS text={text} />
         <ButtonPrimary
        type="button" >salvar</ButtonPrimary>

  
    </Container>
   
  );
}

export default App;
