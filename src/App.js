import styled from "styled-components"
import perguntas from "./perguntas";
import CardQuestion from "./CardQuestion";
import { useState } from "react";


export default function App() {
    const [showcardred, setShowCardRed] = useState(false);
    const [showcardyellow, setShowCardYellow] = useState(false);
    const [showcardgreen, setShowCardGreen] = useState(false);
    const [contador, setContador] = useState(0);
  
    let element1 = [];
    let array = [];
    function puxar(event){
        let element = document.querySelectorAll(".sim");
        for(let j = 0; j < element.length; j++){
            element1.push(element[j])
        }
        console.log(element1);
        console.log(event.target.id)
        array.push(event.target.id)
        console.log(element);
      
    }
    
    function green(){
        
        document.querySelector(".sim").innerHTML = `
         <p style={{color:'green'}} > Pergunta ${array[0]}</p>
            <img src="iongreen.png" alt="green" />
         `
        document.querySelector('.sim p').style.color='green';
        document.querySelector('.sim p').style.textDecoration='line-through green';
  
    }
    function yellow(){
        document.querySelector(".sim").innerHTML = `
         <p class="naolembrei"> Pergunta ${array[0]}</p>
            <img src="ionyellow.png" alt="yellow" />
         `
         document.querySelector('.sim p').style.color='#FF922E';
            document.querySelector('.sim p').style.textDecoration='line-through #FF922E';  
    }
    function red(){
        document.querySelector(".sim").innerHTML = `
         <p class="naolembrei"> Pergunta ${array[0]}</p>
            <img src="ionred.png" alt="yellow" />
         `
         document.querySelector('.sim p').style.color='#FF3030';
         document.querySelector('.sim p').style.textDecoration='line-through #FF3030';    
    }
    
    
  
        
    return (
            <>
                <Title>
                    <img src="zaprecall.png" alt="projeto" />
                    <h2>ZapRecall</h2>
                </Title>
                <div class="perguntas" onClick={puxar} >
                    {perguntas.map((p, i) => (
                        <CardQuestion key={i} pergunta={p} />
                        
                    ))}
                

                       
                   
                </div>
                <Footer showcardgreen={showcardgreen} showcardred={showcardred} showcardyellow={showcardyellow}>
                        <section>
                            <button onClick={() => {setShowCardRed(!showcardred);setContador(contador + 1);red()}}>Não lembrei</button>
                            <button onClick={() => {setShowCardYellow(!showcardyellow);setContador(contador + 1);yellow()}}>Quase não lembrei</button>
                            <button onClick={() => {setShowCardGreen(!showcardgreen);setContador(contador + 1);green()}}>Zap!</button>
                        </section>
                        <p>{contador}/8 CONCLUÍDO</p>
                </Footer>
                
                



            </>
        )
}


const Footer = styled.footer`
    background: #FFFFFF;
    height: 111px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    button{
        width: 85.17px;
        height: 33.27px;
    }
    
   section{
        display: flex;
        justify-content: space-around;
        padding-top: 18.8px;

   }
   button:nth-child(1){
        margin-left:7px;
        background-color:#FF3030;
        width: 85px;
        height: 33px;
        color:#FFFFFF;
        font-size: 12px;
        border:none;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        border-radius: 5px;




    }
   button:nth-child(2){
        margin-left:7px;
        background-color:#FF922E;
        width: 85px;
        height: 33px;
        color:#FFFFFF;
        font-size: 12px;
        border:none;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        border-radius: 5px;




   }
   button:nth-child(3){
        margin-left:7px;
        background-color:#2FBE34;
        width: 85px;
        height: 33px;
        color:#FFFFFF;
        font-size: 12px;
        border:none;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        border-radius: 5px;




    }
   p{
        margin-top: 17.93px;
        font-size: 18px;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;



   }
    
`



const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    font-size: 36px;
    color:#FFFFFF;
    font-family: 'Righteous', cursive;



`


































