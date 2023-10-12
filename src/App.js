import styles from './App.module.css'
import { useState } from 'react'
import {FaBackspace} from 'react-icons/fa'

function App() {
  const [value, setValue] = useState('')
  const [opp, setOpp] = useState('')
  const [oldValue, setOldValue] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const handleAdd = (e)=>{
    if(value === '0'){
      setValue(e.target.value)
    }else{
      setValue(value + e.target.value)
    }
  }

  const handleResult = () =>{
    let result = 0
    
    if(opp === '+'){
        result = parseFloat(oldValue) + parseFloat(value)
        setValue(result)
    }else if(opp === '-'){
        result = parseFloat(oldValue) - parseFloat(value)
        setValue(result)
    }else if(opp === '/'){
        result = parseFloat(oldValue) / parseFloat(value)
        setValue(result)
    }else if(opp ==='*'){
        result = parseFloat(oldValue) * parseFloat(value)
        setValue(result)
    }
    setOpp('')
    setOldValue('')
    return
  }

  const handleOpp = (e)=>{
    setOpp(e.target.value)
    setOldValue(value)
    setValue('')
    return
  }

  const handleErase = ()=>{
    setValue('')
    return
  }


  return (
    <div className={darkMode ? styles.bodyContainerDark : styles.bodyContainer}>
        <div>
                <input 
                        type='checkbox' 
                        id="switch" 
                        onChange={()=>setDarkMode(!darkMode)}></input>

                <label for="switch"></label>
        </div>
        <main className={darkMode ? styles.containerDark : styles.container}>
        <div className={styles.view}>
                <span className={darkMode ? styles.titleDark : styles.title }> Calculator </span>
                
                <span className={darkMode ? styles.resultDark : styles.result}>
                        = { oldValue + opp + value }
                </span>
        </div>

        <div className={darkMode ? styles.keyboardDark : styles.keyboard}>
        
                <button className={darkMode ? styles.buttonDark : styles.button}>AC</button>
        
                <button className={darkMode ? styles.buttonDark : styles.button} onClick={()=> handleErase()}>
                        <FaBackspace className={styles.icon}></FaBackspace>
                </button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="/"
                        onClick={(e)=> handleOpp(e)}>/</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="*"
                        onClick={(e)=> handleOpp(e)}>*</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="7" 
                        onClick={(e)=> handleAdd(e)}>7</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="8" 
                        onClick={(e)=> handleAdd(e)}>8</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="9" 
                        onClick={(e)=> handleAdd(e)}>9</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="-"
                        onClick={(e)=> handleOpp(e)}>-</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="4"
                        onClick={(e)=> handleAdd(e)}>4</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="5"
                        onClick={(e)=> handleAdd(e)}>5</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="6"
                        onClick={(e)=> handleAdd(e)}>6</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="1"
                        onClick={(e)=> handleAdd(e)}>1</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="2"
                        onClick={(e)=> handleAdd(e)}>2</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="3" 
                        onClick={(e)=> handleAdd(e)}>3</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="0"
                        id={styles.item_15} 
                        onClick={(e)=> handleAdd(e)}>0</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        id={styles.item_16}
                        value='+'
                        onClick={(e)=> handleOpp(e)}>+</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        value="." 
                        onClick={(e)=> handleAdd(e)}>.</button>
                
                <button className={darkMode ? styles.buttonDark : styles.button}
                        id={darkMode ? styles.item_18_Dark : styles.item_18} 
                        onClick={()=> handleResult()}>=</button>
        </div>
        </main>
    </div>

  );
}

export default App;
