
import classes from './Button.module.css'



function Button({ title, onClick }: { title: string; onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <button onClick={onClick} className={classes.button}>{title}</button>
  )
}

export default Button