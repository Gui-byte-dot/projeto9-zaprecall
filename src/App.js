import { useState } from "react";
import Question from "./Question";
import styled from "styled-components"
import PERGUNTAS from "./perguntas";


export default function App({}) {
    
    const [perguntas, setPerguntas] = useState([]);      
   
    return (
    <ContainerApp>
        <Question perguntas={perguntas}  />
    </ContainerApp>
    )
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;






// const [questao, setQuestao] = useState({});
    // const [answer, setAnswer] = useState({});
    // const [certa, setCerta] = useState(false);
    // const [isActive, setIsActive] = useState(false);
    // const isHide = true;




// const toggleElement = id => {
//     setQuestao(prevShown => ({
//         ...prevShown,
//         [id]: !prevShown[id]
//     }));
// };
// const toggle = id => {
//     setAnswer(prevShown => ({
//         ...prevShown,
//         [id]: !prevShown[id]
//     }));
// };

// const handleClick = () => {
//     setCerta(current => !current);
// };





{/* <div class="perguntas">
                {perguntas.map((pergunta, index) =>
                    <>
                        { certa ? (
                            <div key={index} >
                            <p className={certa[pergunta.id] ? 'errado' : 'blue'}>Pergunta {pergunta.id}</p>
                            <img key={pergunta.id} src="seta.png" alt="setinha" onClick={() => toggleElement(pergunta.id)} />
                        </div>
                        ) :
                                questao[pergunta.id] ?
                                    (answer[pergunta.id] ?
                                        <section class="exibir">
                                            <p>{pergunta.answer}</p>
                                            <button class="naolembrei" onClick={handleClick}>Não lembrei</button>
                                            <button class="quasenaolembrei">Quase não lembrei</button>
                                            <button class="zap">Zap!</button>
                                        </section> :
                                        <section class="exibir">
                                            <p >{pergunta.question}</p>
                                            <img src="retorno.png" alt="retorno" onClick={() => toggle(pergunta.id)} />
                                        </section>
                                    ) :
                                    <div key={index} >
                                        <p>Pergunta {pergunta.id}</p>
                                        <img key={pergunta.id} src="seta.png" alt="setinha" onClick={() => toggleElement(pergunta.id)} />
                                    </div>
                        }

                    </>

                )

                }

            </div> */}







{/* <>
<div class="title">
    <img src="zaprecall.png" alt="projeto" />
    <h2>ZapRecall</h2>
</div>
<div class="perguntas">
    <div>
        <h2>Pergunta1</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
    <div>
        <h2>Pergunta2</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
    <div>
        <h2>Pergunta3</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
    <div>
        <h2>Pergunta4</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
    <div>
        <h2>Pergunta5</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
    <div>
        <h2>Pergunta6</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
    <div>
        <h2>Pergunta7</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
    <div>
        <h2>Pergunta8</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
    <div>
        <h2>Pergunta1</h2>
        <img src="seta.png" alt="indicar"/>
    </div>
</div>
</> */}

// style={{display: isHide ? 'none' : 'block'}}