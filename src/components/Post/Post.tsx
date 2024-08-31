import classes from './Post.module.css'

interface PostProps{
  title: string,
  body: string,
}

function Post ({title,body}:PostProps) {
  return (
    <li className={classes.post}>
      <h2 className={classes.post__title}>{title}</h2>
      <hr />
      <p className={classes.post__body}>{body}</p>
    </li>
  )
}

export default Post;