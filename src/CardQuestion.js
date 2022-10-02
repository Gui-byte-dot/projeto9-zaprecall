import { useState} from "react";
import Question from "./Question";
export default function CardQuestion({pergunta,props}){
    const [showquestion, setShowQuestion] = useState(false);
    const [dpquestion, setDpQuestion] = useState("flex");

    

    return(

            <>
                <div key={pergunta.id} style={{ display: dpquestion }}>
                    <p>Pergunta {pergunta.id}</p>
                    <img key={pergunta.id} src="seta.png" alt="setinha" onClick={() => { setShowQuestion(!showquestion); setDpQuestion("none"); } }  />
                </div>
                {showquestion ? <Question pergunta={pergunta}/> : null}


            </>




    )
}
// ;setDp("none")