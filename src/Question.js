import { useState } from "react";
import Answer from "./Answer";

export default function Question({pergunta}){
    const [showanswer, setShowAnswer] = useState(false);
    const [dpanswer, setDpAnswer] = useState("flex")

    return(
        <div>
            <section class="exibirquestion" style={{display: dpanswer}}>
                <p>{pergunta.question}</p>
                <img src="retorno.png" alt="retorno" onClick={() => {setShowAnswer(!showanswer);setDpAnswer("none")}}/>
            </section>
            {showanswer ? <Answer pergunta={pergunta}/> : null}

        </div>
    )
}