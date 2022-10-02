import { useState } from "react";
import ButtonCard from "./ButtonCard";
import CardQuestion from "./CardQuestion";
import App from "./App";
import Question from "./Question";
import CardQuestionRed from "./CardQuestionRed";
import CardQuestionYellow from "./CardQuestionYellow";
import CardQuestionGreen from "./CardQuestionGreen";
import styled from "styled-components";
import Concluido from "./App";
import Valor from "./App"

export default function Answer({pergunta,setContador,contador}){
   const [showcardred, setShowCardRed] = useState(false);
   const [showcardyellow, setShowCardYellow] = useState(false);
   const [showcardgreen, setShowCardGreen] = useState(false);
   const [dpcard, setDpCard] = useState('flex');
   
    return(
        <>  
            <section class="exibiranswer" style={{display:dpcard}}>
                <p>oi</p>

                <p>{pergunta.answer}</p>
                <button  onClick={() => {setDpCard("none");setShowCardRed(!showcardred);setContador(contador+1)}} />
                <button onClick={() => {setDpCard("none");setShowCardYellow(!showcardyellow)}} />
                <button onClick={() => {setDpCard("none");setShowCardGreen(!showcardgreen)}} />
            </section>
            {showcardred ? <CardQuestionRed  pergunta={pergunta}/> : null}
            {showcardyellow ? <CardQuestionYellow  pergunta={pergunta}/> : null}
            {showcardgreen ? <CardQuestionGreen  pergunta={pergunta}/> : null}

            
         


           

        </>
        
    )
} 



