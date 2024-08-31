import classes from "./Comment.module.css"

interface CommentProps {
  id:number,
  name:string,
  email:string,
  body:string,

}


function Comment({name,email,body}:CommentProps) {
  return (
    <div className={classes.comment}>
      <p className={classes.comment__name}>{name}</p>
      <p className={classes.comment__body}>{body}</p>
      <p className={classes.comment__email}>{email}</p>
    </div>
  )
}

export default Comment