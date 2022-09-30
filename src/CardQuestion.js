import styled from "styled-components"

export default function CardQuestion({ pergunta: {id, question, answer}}) {

    return (
        <ItemCarrinho>
            <div>
                <strong>{question}</strong>
                <p>{answer}</p>
            </div>
            <button>X</button>
        </ItemCarrinho>
    )
}
// onClick={() => removerItemDoCarrinho(id)}

const ItemCarrinho = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    margin-bottom: 5px;
  }
`
