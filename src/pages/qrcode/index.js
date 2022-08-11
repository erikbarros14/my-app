import React from 'react';
import { useEffect } from 'react';

import QRCode from 'qrcode'

export function QRCODECANVAS ({text}) {
const canvasRef = useRef ()

useEffect(() => {
 QRCode.toCanvas(canvasRef.current , text , (error) => {
    console.log(error)
 } )
}, [text] )  
    return (
       <div>
         <canvas ref={canvasRef}id="canvas" ></canvas> 
       </div>

    )
}