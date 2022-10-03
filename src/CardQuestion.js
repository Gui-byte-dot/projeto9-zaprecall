import { useState} from "react";
import Question from "./Question";
export default function CardQuestion({pergunta}){
    const [showquestion, setShowQuestion] = useState(false);
    const [dpquestion, setDpQuestion] = useState("flex");
   
    
    return(

            <>
                <div key={pergunta.id} style={{ display: dpquestion }} >
                    <p>Pergunta {pergunta.id}</p>
                    <img key={pergunta.id} src="seta.png" id={pergunta.id} alt="setinha" onClick={() => { setShowQuestion(!showquestion); setDpQuestion("none");} }  />
                </div>

                {showquestion ? <Question pergunta={pergunta}/> : null}


            </>




    )
}
