import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export type Post={
  userId:number,
  id: number,
  title: string,
  body: string,
}

type PostsState={
  list: Post[],
  status: null|string,
  error: any,
}
const initialState : PostsState={
  list:[],
  status:null,
  error: null,
}

export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  "posts/fetchPosts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      return data as Post[];
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);
// export const fetchPosts = createAsyncThunk(
//   "posts/fetchPosts",
//   async function (_, { rejectWithValue }) {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts_limit=10"
//       );
//       if (!response.ok) {
//         throw new Error("Server Error");
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // addTodo(state, action:PayloadAction<string>) {
    //   state.todos.push({
    //     id: new Date().toISOString(),
    //     title: action.payload,
    //     completed: false,
    //   });
    // },
    // removeTodo(state, action) {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    // },
    // toggleTodoCompleted(state, action) {
    //   const toggledTodo = state.todos.find(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   toggledTodo.completed = !toggledTodo.completed;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status  = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "resolved";
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const {  } = postsSlice.actions;
export default postsSlice.reducer;
