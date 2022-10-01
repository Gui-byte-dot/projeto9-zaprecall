import { useState } from "react";
import ButtonCard from "./ButtonCard";
import CardQuestion from "./CardQuestion";
import App from "./App";
import Question from "./Question";

export default function Answer({pergunta,dpquestion,setDpQuestion,props}){
   const [showcard, setShowCard] = useState(false);
   const [dpcard, setDpCard] = useState('block');


    return(
        <>  
            <section class="exibir" style={{display:dpcard}} >
                <p style={{display:dpcard}}>{pergunta.answer}</p>
                <button onClick={() => {setDpCard("none");setShowCard(!showcard)}}/>
            </section>
            {showcard ? <CardQuestion style={{display:'block'}}  pergunta={pergunta}/> : null}
        </>
        
    )
} 
