import { Link } from 'react-router-dom';
import classes from './PostDitails.module.css'
import Button from '../Button/Button';

interface PostProps {
  title: string;
  body: string;
}

function PostDitails({ title, body }: PostProps) {
  return (
    <div className={classes.postDitails}>
      <div className={classes.postDitails__wrapp}>
      <h2 className={classes.postDitails__title}>{title}</h2>
      <p className={classes.postDitails__body}>{body}</p>
      </div>
      <Link to='/'>
      <Button title='Back'/></Link>
    </div>
  );
}

export default PostDitails;
