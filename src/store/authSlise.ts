import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";



type AuthState={
  user:any,
  status: null|string,
  error: any,
}

const initialState : AuthState={
  user:null,
  status:null,
  error: null,

}

export const fetchAuth = createAsyncThunk<string[], string, { rejectValue: string }>(
  "auth/fetchAuth",
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${name}`);
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
    if(!data.length){
      throw new Error("Пользователь с таким именем не найден!!!");
    }
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


const AuthsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    logOut(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status  = "loading";
        state.error = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
    
        state.status = "resolved";
        if(action.payload.length){
          state.user = action.payload;
        }
        else{
          state.error = action.payload;
        }
      
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        
      });
  },
});

export const { logOut } = AuthsSlice.actions;
export default AuthsSlice.reducer;
