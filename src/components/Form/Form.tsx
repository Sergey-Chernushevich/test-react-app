import Button from '../Button/Button'
import classes from './Form.module.css'
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from '../../store/hook'
import { fetchAuth } from '../../store/authSlise'


function Form() {
  let navigate = useNavigate ();
  
  const [text,setText]=useState('')

  const dispatch = useAppDispatch();

const handlerButtonClick=(name:string, )=>{
  if(name.length){
    dispatch(fetchAuth(name)).then((resultAction) => {
        if (resultAction.type ==='auth/fetchAuth/rejected') {
        alert(resultAction.payload)
      } else{
        navigate('/');
      }
      
    });
  }
}


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
}

  return (
    <form className={classes.form}  onSubmit={handleSubmit}>
      <h2 className={classes.form__title}>Sign In</h2>
      <input className={classes.form__input} 
        type="text" 
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>

      <Button title="Sign In" onClick={()=>handlerButtonClick(text)}/>
    </form>
  )
}

export default Form