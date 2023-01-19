import { useState } from "react"
import styles from './Input.module.css'

export default function Input({onNewTodo}){

  const [value, setValue] = useState('');

  const erase = ()=>{
    setValue('');
  }

  const submit = ()=>{
    onNewTodo(value);
    erase();
  }

  const onKeyPress = (e)=>{
    if(e.which === 13){
      submit();
    }
  }

  const onChange = (e)=>{
    setValue(e.target.value)
  }

  return <input onChange={onChange} value={value} onKeyDown={onKeyPress} className={styles.input}/>


}
