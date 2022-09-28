import { useState } from "react"

export default function App() {
    const [questao, setQuestao] = useState({});
    const [answer, setAnswer] = useState({});
    const isHide = true;
    const perguntas =
        [
            { id: 1, question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
            { id: 2, question: 'O React é __?', answer: 'Uma extensão de linguagem do JavaScript' },
            { id: 3, question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula' },
            { id: 4, question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
            { id: 5, question: 'O ReactDOM nos ajuda', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
            { id: 6, question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
            { id: 7, question: 'Usamos props para __', answer: 'passar diferentes informações para componentes ' },
            { id: 8, question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
        ];
    const toggleElement = id => {
        setQuestao(prevShown => ({
            ...prevShown,
            [id]: !prevShown[id]
        }));
    };
    const toggle = id => {
        setAnswer(prevShown => ({
            ...prevShown,
            [id]: !prevShown[id]
        }));
    };



    return (
        <>
            <div class="title">
                <img src="zaprecall.png" alt="projeto" />
                <h2>ZapRecall</h2>
            </div>
            <div class="perguntas">
                {perguntas.map((pergunta, index) =>
                    <>
                    

                        {
                        
                        questao[pergunta.id] ?
                            (answer[pergunta.id] ?
                                <section class="exibir">
                                    <p>{pergunta.answer}</p>
                                </section> :
                            <section class="exibir">
                                <p>{pergunta.question}</p>
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

            </div>
        </>

    )
}

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