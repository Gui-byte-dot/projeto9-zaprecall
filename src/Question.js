import styled from "styled-components"
import CardQuestion from "./CardQuestion";

export default function Question(props){
    const {perguntas} = props
    return(
    <ContainerCarrinho>
        {perguntas.map((pergunta) => <CardQuestion key={pergunta.id} pergunta={pergunta} /> )}
    </ContainerCarrinho>
    )

}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;