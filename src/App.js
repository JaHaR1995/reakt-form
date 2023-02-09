import { useState } from 'react';
import './App.css';

function App() {
  
  const [text, setText] = useState() 
  const [textError, setTextError] = useState(true)     
  const [addText, setAddText] = useState(false)
  const [blur, setBlur] = useState(false)  
  
  const handleText =(e) =>{
    setText(e.target.value)     
    if(!e.target.value){
      setTextError(true)
    }else{
      setTextError(false)       
      setAddText(false)   
    }
  }
                                                 
  const handleClick = () =>{      
    console.log(text);    
    if(text){              
      setAddText(true)
    } else{
      setAddText(false)   
      setTextError(false)   
      
    }
  }                                        

    
  const handleBlur = () =>{                 
    if(!text){
      setTextError(true)
    }
    setAddText(false) 
    setBlur(false)   
    
      
  }


  const handleFocus =() =>{
     setTextError(false)    
  }

                                                  
  return (
    <div className='forma'>
      <input value={text} type="text" placeholder='Введите текст' onChange={handleText}  onBlur={handleBlur}  onFocus={handleFocus}  /> 
      <button  disabled={text} onClick={handleClick}>Отправить</button>   
      {(textError) && <div className='Error'>Поле не должно быть пустым</div>}  
      {(addText && blur) && <div className='OK'>Письмо успешно отправлено</div>}   
    </div>
  )
}

export default App        
