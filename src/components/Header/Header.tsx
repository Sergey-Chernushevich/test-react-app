import Button from "../Button/Button";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch,useAppSelector } from '../../store/hook'
import { logOut } from "../../store/authSlise";


function Header() {
  const dispatch=useAppDispatch()
  const {user,status,error} = useAppSelector((state) => state.auth);

  let ButtonTitle = 'Sign In';
  if(user){
    ButtonTitle='Log Out';
  }

function  handlerButtonClick (){
  if(user){
    dispatch(logOut());
  }
}

  return (
    <header className={classes.header}>
      <Link to='/'>
        <h1 className={classes.header__logo}>Best Application</h1>
      </Link>
      <Link to={!user? '/auth':'/'} >
      <Button title={ButtonTitle} onClick={()=>{handlerButtonClick()}}/>
      </Link>
    </header>
  )
}

export default Header