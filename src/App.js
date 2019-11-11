import React, {useState} from 'react';
import './App.css';


let article = [
  {
    feedback:'First Button'},
  {
    feedback:'Secone Button'},
  {
    feedback:'Third Button'},
]

function App() {

  const[mode, setMode] =  useState('1st button');
  const[buttonstyle1, setStyle1] =  useState('');
  const[buttonstyle2, setStyle2] =  useState('');
  const[buttonstyle3, setStyle3] =  useState('');

  function handleClick1(){
    console.log('1clicked');

    if('1clicked'){
      setMode('1st button');
      setStyle1('clicked');
      setStyle3('');
      setStyle2('');
      
    } 
    setTimeout(function(){  
    setStyle1('');
    setStyle3('');
    setStyle2('');; }, 5000);
  }

  function handleClick2(){
    console.log('2clicked');

    if('2clicked'){
      setMode('2nd button');
      setStyle2('clicked');
      setStyle1('');
      setStyle3('');
    } 
    setTimeout(function(){  
      setStyle1('');
      setStyle3('');
      setStyle2('');; }, 5000);
  }
  function handleClick3(){
    console.log('3clicked');

    if('3clicked'){
      setMode('3rd button');
      setStyle3('clicked');
      setStyle1('');
      setStyle2('');
    } 
    setTimeout(function(){  
      setStyle1('');
      setStyle3('');
      setStyle2('');; }, 5000);
  }


  return (
    <div className="App">
      <button onClick={handleClick1} className={buttonstyle1}> First Button </button>
      <button onClick={handleClick2} className={buttonstyle2}> Second Button </button>
      <button onClick={handleClick3} className={buttonstyle3}> Third Button </button>

      <div className = "box">
      <p>You have selected the {mode}.</p> 
      </div>
      </div> 
  );
}


export default App;

