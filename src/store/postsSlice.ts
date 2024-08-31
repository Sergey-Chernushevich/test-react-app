import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export type Post={
  userId:number,
  id: number,
  title: string,
  body: string,
}

export type PostDitails={
  postId:number,
  id: number,
  name: string,
  email:string,
  body: string,
}

type PostsState={
  list: Post[],
  status: null|string,
  error: any,
  post: any,
}

const initialState : PostsState={
  list:[],
  status:null,
  error: null,
  post:null,
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

export const fetchPostDitails = createAsyncThunk<string[], number, { rejectValue: string }>(
  "auth/fetchPostDitails",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
    if(!data.length){
      throw new Error("Ничего не найдено(");
    }
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
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
      })

      .addCase(fetchPostDitails.pending, (state) => {
        state.status  = "loading";
        state.error = null;
      })
      .addCase(fetchPostDitails.fulfilled, (state, action) => {
        state.status = "resolved";
        state.post = action.payload;
        
      })
      .addCase(fetchPostDitails.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const {  } = postsSlice.actions;
export default postsSlice.reducer;
