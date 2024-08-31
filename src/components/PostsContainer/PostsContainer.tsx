import classes from './PostsContainer.module.css'
import { Link } from "react-router-dom";
import Post from '../Post/Post'
import { Post as PostType } from '../../store/postsSlice';

function PostsContainer({ posts }:any ) {
  return (
    <ul className={classes.postContainer}>
    
      {posts.map((post:PostType)=>{
        return(
          <Link className={classes.postLink} to={`./posts/${post.id}`} key={post.id}>
          <Post  title={post.title} body={post.body}/>
          </Link>
        )
      })}
    </ul>
  )
}

export default PostsContainer

