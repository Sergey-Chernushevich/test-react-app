import { Route, Routes } from "react-router-dom";
import { useAppSelector} from "./store/hook";
import './App.css';
import AuthPage from './components/AuthPage/AuthPage';
import Header from './components/Header/Header';
import PostsPage from './components/PostsPage/PostsPage';
import PostDitails from "./components/PostDitails/PostDitails";


function App() {
  const {list} = useAppSelector((state) => state.posts);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/" element={<PostsPage/>} />

        {list.map(post=>{
          return(
            <Route 
            key={post.id} 
            path={`/posts/${post.id}`} 
            element={<PostDitails
              title={post.title}
              body={post.body}
            />}
            />
          )
        })}
      </Routes>
    </div>
  );
}

export default App;
