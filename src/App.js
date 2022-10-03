import styled from "styled-components";
import perguntas from "./perguntas";
import CardQuestion from "./CardQuestion";
import { useState } from "react";

export default function App() {
  const [showcardred, setShowCardRed] = useState(false);
  const [showcardyellow, setShowCardYellow] = useState(false);
  const [showcardgreen, setShowCardGreen] = useState(false);
  const [contador, setContador] = useState(0);
  let array = [];
  function puxar(event) {
    console.log(event.target.id);
    array.push(event.target.id);
    console.log(array);
  }

  function green() {
    let element3 = document.querySelectorAll(".sim");

    element3[element3.length - 1].innerHTML = `
         <p style={{color:'green'}} > Pergunta ${array[0]}</p>
            <img src="iongreen.png" alt="green" />
         `;
    console.log(element3[0].children);
    element3[element3.length - 1].firstElementChild.style.color = "green";
    element3[element3.length - 1].style.textDecoration = "line-through green";
  }
  function yellow() {
    let element4 = document.querySelectorAll(".sim");

    element4[element4.length - 1].innerHTML = `
         <p class="p1" style={{color:'#FF922E'}}> Pergunta ${array[0]}</p>
            <img src="ionyellow.png" alt="yellow" />
         `;
    element4[element4.length - 1].firstElementChild.style.color = "#FF922E";
    element4[element4.length - 1].style.textDecoration = "line-through #FF922E";
  }
  function red() {
    let element5 = document.querySelectorAll(".sim");
    element5[element5.length - 1].innerHTML = `

         <p  style={{color:'#FF3030'}}> Pergunta ${array[0]}</p>
            <img src="ionred.png" alt="yellow" />
         `;
    element5[element5.length - 1].firstElementChild.style.color = "#FF3030";
    element5[element5.length - 1].style.textDecoration = "line-through #FF3030";
  }

  return (
    <>
      <Title>
        <img src="zaprecall.png" alt="projeto" />
        <h2>ZapRecall</h2>
      </Title>
      <div class="perguntas" onClick={puxar}>
        {perguntas.map((p, i) => (
          <CardQuestion key={i} pergunta={p}>
            <span style={{ display: "none" }}>{perguntas.id}</span>
          </CardQuestion>
        ))}
      </div>
      <Footer
        showcardgreen={showcardgreen}
        showcardred={showcardred}
        showcardyellow={showcardyellow}
      >
        <section>
          <button
            onClick={() => {
              setShowCardRed(!showcardred);
              setContador(contador + 1);
              red();
            }}
          >
            Não lembrei
          </button>
          <button
            onClick={() => {
              setShowCardYellow(!showcardyellow);
              setContador(contador + 1);
              yellow();
            }}
          >
            Quase não lembrei
          </button>
          <button
            onClick={() => {
              setShowCardGreen(!showcardgreen);
              setContador(contador + 1);
              green();
            }}
          >
            Zap!
          </button>
        </section>
        <p>{contador}/8 CONCLUÍDO</p>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  background: #ffffff;
  height: 111px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  button {
    width: 85.17px;
    height: 33.27px;
  }

  section {
    display: flex;
    justify-content: space-around;
    padding-top: 18.8px;
  }
  button:nth-child(1) {
    margin-left: 7px;
    background-color: #ff3030;
    width: 85px;
    height: 33px;
    color: #ffffff;
    font-size: 12px;
    border: none;
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    border-radius: 5px;
  }
  button:nth-child(2) {
    margin-left: 7px;
    background-color: #ff922e;
    width: 85px;
    height: 33px;
    color: #ffffff;
    font-size: 12px;
    border: none;
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    border-radius: 5px;
  }
  button:nth-child(3) {
    margin-left: 7px;
    background-color: #2fbe34;
    width: 85px;
    height: 33px;
    color: #ffffff;
    font-size: 12px;
    border: none;
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    border-radius: 5px;
  }
  p {
    margin-top: 17.93px;
    font-size: 18px;
    font-family: "Recursive", sans-serif;
    font-weight: 400;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  font-size: 36px;
  color: #ffffff;
  font-family: "Righteous", cursive;
`;
