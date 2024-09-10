import { useState } from "react";
import ButtonsLogic from "./components/ButtonsLogic";
import InputLogic from "./components/InputLogic";

function App() {
  const [inputValue, setInputValue] = useState('')

function handleNumberClick(num){
  setInputValue((prev) => prev + num);
}
function handleOperatorClick(op){
  setInputValue((prev) => prev + op)
}
function handleClearClick(){
  setInputValue('')
}

function handleEqualsClick(){
  try {
    setInputValue(eval(inputValue).toString()); // Evaluate the input string and set it as the new value
  } catch (error) {
    setInputValue("Error"); // Handle any evaluation errors
  }
}

  return (
    <>
      <InputLogic inputValue={inputValue}/>
      <ButtonsLogic handleEqualsClick={handleEqualsClick} handleOperatorClick={handleOperatorClick} handleClearClick={handleClearClick} handleNumberClick={handleNumberClick}/>
      <CalculationLogic/>
    </>
  )
}

export default App;
