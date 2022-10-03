import { useState } from "react";
import Question from "./Question";
import App from "./App";
import styled from "styled-components"



export default function Answer({pergunta}){
    const [showcardred, setShowCardRed] = useState(false);
    const [showcardyellow, setShowCardYellow] = useState(false);
    const [showcardgreen, setShowCardGreen] = useState(false);
    const [contador, setContador] = useState(0);
    const [dpcard, setDpCard] = useState("flex")

    return(
        <>  
            <section class="exibiranswer" style={{display: dpcard}} id="operation">
                <p>{pergunta.answer}</p>
                <p class="yes" style={{display:'none'}}>{pergunta.id}</p>
                {/* <button  contador={contador} setContador={setContador} onClick={() => {setShowCardRed(!showcardred);setContador(contador + 1);setDpCard("none")}} />
                <button onClick={() => {setShowCardYellow(!showcardyellow)}} />
                <button onClick={() => {setShowCardGreen(!showcardgreen)}} /> */}
            </section>

            {showcardred ? <><p style={{ color: 'red' }}>Pergunta {pergunta.id}</p><img src="ionred.png" alt="red" /></> : null}              
            {showcardyellow ? <><p style={{ color: 'green' }}>Pergunta {pergunta.id}</p><img src="iongreen.png" alt="green" /></> : null}
            {showcardgreen ? <><p style={{ color: 'yellow' }}>Pergunta {pergunta.id}</p><img src="ionyellow.png" alt="yellow" /></> : null}

            


           

        </>
        
        
        
    )
} 


