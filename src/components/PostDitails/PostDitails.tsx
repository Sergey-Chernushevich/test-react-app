import { Link } from 'react-router-dom';
import classes from './PostDitails.module.css'
import Button from '../Button/Button';
import { useEffect } from 'react';
import { fetchPostDitails } from '../../store/postsSlice';
import { useAppDispatch ,useAppSelector} from '../../store/hook';
import Comment from '../Comment/Comment';

interface PostProps {
  postId:number;
}

function PostDitails({ postId }: PostProps) {
  const {post,status} = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostDitails(postId));
  }, [dispatch,postId]);


  return (
    <div className={classes.postDitails}>
      {status === "loading" && <h2 className={classes.loading}>Loading...</h2>}
      <div className={classes.postDitails__wrapp}>
        {post && post.map((comment:any)=>{
          return(
            <Comment key={comment.id} id={comment.id} name={comment.name} email={comment.email} body={comment.body}/>)
        })}
      </div>
      <Link to='/'>
      <Button title='Back'/>
      </Link>
    </div>
  );
}

export default PostDitails;
