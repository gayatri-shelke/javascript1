import './App.css';
import React,{useState} from'react'
import Delete from '@material-ui/icons/Delete'
import {Button} from '@material-ui/core'
function App() {
  const [color,setColor]=useState('primary')
  const [disablebtn,setDisablebtn]=useState(false)
  function onclicked(){
    // setColor('secondary')
    setDisablebtn(true)
  }
  return (
    <div className="App">
    <h1>Hello</h1>
    <Button color={color} disabled={disablebtn} startIcon={<Delete/>} variant="contained" 
    onClick={()=>{onclicked()}}>Default</Button>

    </div>
  );
}

export default App;

