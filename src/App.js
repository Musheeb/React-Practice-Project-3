import React,{useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import TestProps from './components/TestProps';
import NewComponent from './components/NewCompo';
import BeAlly from "./components/BeAlly";


function App() {
  const [name,setName] = useState('BeAlly')
  function updateState(){
    const updatedState = setName('Updated-BeAlly')
    return(
      <h1>{updatedState}</h1>
    )
  }
  return (
    <div className='App'>
      <h1 style={{color:'red'}}>React JS</h1>
      <Counter name={'Abdurraheman'} value = {'abdurrahman.bcs@gamil.com '} phone={'9142345566'}/>
      <TestProps test={'Test1'} email={'Test1@gmail.com'}/>
      <TestProps test={'Test2'} email={'Test2@gmail.com'}/>
      <TestProps test={'Test3'} email={'Test3@gmail.com'}/>
      <TestProps test={'Test4'} email={'Test4@gmail.com'}/>
      <TestProps test={'Test5'} email={'Test5@gmail.com'}/>
      <NewComponent name={name} />
      <button className='btn btn-secondary btn-sm m-3' onClick={updateState}>NewCom Update</button>
      <BeAlly clientName='TeaLeta' country='France' />
    </div>
    
  );
  
}

export default App;
