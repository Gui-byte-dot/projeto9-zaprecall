import { useState } from "react";
import Answer from "./Answer";

export default function Question({pergunta}){
    const [showanswer, setShowAnswer] = useState(false);
    const [dpanswer, setDpAnswer] = useState("block")

    return(
        <section class="exibir">
            <p style={{display: dpanswer}}>{pergunta.question}</p>
            <img src="retorno.png" alt="retorno" onClick={() => {setShowAnswer(!showanswer);setDpAnswer("none")}} style={{display: dpanswer}}/>
            {showanswer ? <Answer pergunta={pergunta}/> : null}
        </section>
    )
}