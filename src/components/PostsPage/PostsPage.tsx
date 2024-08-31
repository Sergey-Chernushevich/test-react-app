import PostsContainer from '../PostsContainer/PostsContainer'
import classes from './PostsPage.module.css'
import { useAppSelector} from "../../store/hook";

function PostPage() {

  const {list, status, error } = useAppSelector((state) => state.posts);

  return (
    <section className={classes.postPage}>
      {status === "loading" && <h2 className={classes.loading}>Loading...</h2>}
      {error && <h2 className={classes.error}>{error}</h2>}
      <PostsContainer posts={list}/>
    </section>
  )
}

export default PostPage