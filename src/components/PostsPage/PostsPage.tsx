import PostsContainer from '../PostsContainer/PostsContainer'
import classes from './PostsPage.module.css'
import { useEffect } from "react";
import {useAppDispatch, useAppSelector} from "../../store/hook";
import {  fetchPosts } from "../../store/postsSlice";

function PostPage() {

  const {list, status, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className={classes.postPage}>
      {status === "loading" && <h2 className={classes.loading}>Loading...</h2>}
      {error && <h2 className={classes.error}>{error}</h2>}
      <PostsContainer posts={list}/>
    </section>
  )
}

export default PostPage