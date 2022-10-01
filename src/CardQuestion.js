import { useState} from "react";
import Question from "./Question";
export default function CardQuestion({pergunta,props}){
    const [showquestion, setShowQuestion] = useState(false);
    const [dpquestion, setDpQuestion] = useState("block");

    

    return(

        <div key={pergunta.id} >
            <p style={{display: dpquestion}}>Pergunta {pergunta.id}</p>
            <img key={pergunta.id} src="seta.png" alt="setinha" onClick={() => {setShowQuestion(!showquestion);setDpQuestion("none")}} style={{display: dpquestion}} />
            {showquestion ? <Question pergunta={pergunta}/> : null}

        </div>


    )
}
// ;setDp("none")