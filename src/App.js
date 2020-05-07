import React, {useState, useRef} from 'react';
import styled, {css, keyframes} from 'styled-components';
import Board from './components/Board/Board';
import Tomato from "./pomidor.png"
import Basil from "./basil.png";
import Splash from "./splash.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [start,setStart] = useState(false);
  const [timer, setTimer] = useState(25);
  const StainTextCounter= useRef("3");
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState("3");
  
  const Menu = styled.div`
  overflow: hidden;
  position: fixed;
  top:0;
  width: 100%;
  left:0;
  height:7%;
  padding: 5px;
  display: block;
  background: tomato;

  `
  const Logo =  styled.div`
  margin: 0 auto;
  float:left;
  display: inline-block;
  color: white;
  font-family: "Fredoka One";
  `
  const Content = styled.div`
  margin-top: 7%;
  `
  const Login = styled.span`
  display:block;
  padding: 5px;
  background: tomato;
  color: white;
  font-family: "Fredoka One";
  border-radius: 15%;
  float: right;
  `

  const Link = styled.a`
  text-decoration: none;
  font-family: "Fredoka One";
  color: white;
  padding: 15px;
  `

  const Pomodoro = styled.div`

  margin: 0 auto;
  padding: 15px;
  background: red;
  color: white;
  width: 30%;
  `
  const Basilico = styled.div`
    padding: 15px;
    background: papayawhip;
    height:100%;
    color: black;
    width: 70%;
  `
  const Title=styled.h1`
    font-size: 3em;
    text-align: center;
    font-family: "Fredoka One", cursive;
    color: darkolivegreen;
  `
  const SubTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  font-family: "Fredoka One", cursive;
  color: olive;
  `
  const PomodoroTitle=styled.h1`
    font-size: 3em;
    text-align: center;
    font-family: "Fredoka One", cursive;
    color: white;
  `
  const PomodoroSubTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  font-family: "Fredoka One", cursive;
  color: white;
  `
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
from  {opacity: 0}
to {opacity: 1}
`
const TomatoContainer = styled.div`
position: relative;
`

const TomatoImg = styled.img`
position: absolute;
width: 100%;
animation: ${rotate} 10s infinite;
`
const TomatoTimer = styled.div`
position: absolute;
margin-top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
text-align: center;
font-family: "Fredoka One", cursive;

`

const BasilicoImg = styled.img`
height: 100px;
animation: ${rotate} 5s infinite;
`
const PlainText = styled.h4`
margin: 0 0 5 auto;
text-align: center
  font-family: "Lato";
  text-align: center; 
`

 
const Stain = styled.div`
height: 100%;
position: relative;
width:100%;
animation: ${fadeIn} 1s ease-out infinite;
`
const StainLogo = styled.img`
position: absolute;

width:100%;
z-index:0;
`

const StainText = styled.div`
position: absolute;
color: white;
z-index:1;
width:100%;
`
const Counter = styled.h1`

width: 5px;
position: absolute;
margin-top: 45%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
text-align: center;
}
`
const Task = styled.input`
display: block;
padding: 5px;
margin: 0 auto 25px auto;
background: white;
border: none;
border-radius: 3px;
font-family: "Lato";
font-size: 25px;
color: darkolivegreen;
`

const handleTomatoTimer = (e) =>{
  
  e.preventDefault();
  setStart(!start);
  
  let counter=2;
   let i = setInterval(()=>{
      console.log(countdown)
     setCountdown(counter.toString());
      if(counter===0){
       setStart(start);
       clearInterval(i);
       setCountdown("3");
      }
      counter--;
      
      
    },1000)
    
  
  }
  return (
    <div className="App">
    

          <Menu>
            <Logo><h3 style={{color:"white"}}>Pomodoro & Basilico - a recipe for plain work</h3></Logo>
            <Login>
                <Link href="#">Login <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon></Link>
                <Link href="#">Sign Up <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></Link>
              </Login>
          </Menu>
          <Content>
            <div style={{display: "flex"}}>
            <Pomodoro>
              <PomodoroTitle>Pomodoro </PomodoroTitle>
              <PomodoroSubTitle>pomodoro timer for focused state of work</PomodoroSubTitle>
              <PlainText>to start just squeeze the tomato :)))))</PlainText>
              {start?
                <Stain start={start}>
                <StainLogo src={Splash}  alt="plama"></StainLogo>
                <Counter counterRef={StainTextCounter}>{countdown}</Counter>
                </Stain>
              :
              <TomatoContainer>
                <TomatoImg src={Tomato} start={start} alt="pomidor" onClick={handleTomatoTimer}></TomatoImg>
                <TomatoTimer><h3>{minutes}m : {seconds}s</h3></TomatoTimer>
              </TomatoContainer>
              }
              
             
             
            </Pomodoro>
            <Basilico>
            
            <Title>Basilico <BasilicoImg src={Basil} alt=""/></Title>
            <SubTitle>kanban board for your daily routine</SubTitle>
            <Task placeholder="Add some tasks..." autofocus></Task>
            <Board></Board>
            </Basilico>
            </div>
          </Content>
      </div>
  
  );
}

export default App;
