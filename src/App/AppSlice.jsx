import { createSlice, nanoid } from "@reduxjs/toolkit";
const AppSlice = createSlice({
  name: "AppSlice",
  initialState: {
    rand: Math.floor(Math.random() * (20 - 10 + 1)),
    isNavBarVisible: true,
    isFooterVisible: true,
    url: {},
    genres: {},
    isDropDownVisible: false,
    userArray: [],
    MovieData:[],
    ActionMovie:[],
    HorrorMovie:[],
    ComedyMovie:[],
    marvelMovie:[],
    Scifi:[],
    watchList:[],
    currentMovie:{},
    searchQuery:"",
   
  },
  reducers: {
    getWatchList:(state, action) =>{
      state.watchList.push(action.payload)
      
    },
    getUrl: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
    setIsNavBarVisible: (state, action) => {
      state.isNavBarVisible = action.payload;
    },
    setIsFooterVisible: (state, action) => {
      state.isFooterVisible = action.payload;
    },
    setIsDropDownVisible: (state, action) => {
      state.isDropDownVisible = action.payload;
    },
    setuser: (state, action) => {
      const id = nanoid();
      const user = { id, ...action.payload };
      state.userArray.push(user);
    },
    deleteUser: (state, action) => {
       state.userArray= state.userArray.filter((item)=>item.id !== action.payload)
    },
    getMovieData:(state, action) => {
      state.MovieData = action.payload;
    },
    getHorrorData:(state, action) => {
      state.HorrorMovie = action.payload;
    }
    ,
    getComedyData:(state, action) => {
      state.ComedyMovie = action.payload;
    },
    getActionData:(state, action) => {
      state.ActionMovie = action.payload;
    },
    getCurrentMovie:(state, action) => {
      state.currentMovie = action.payload;
    },
    getSearchQuery:(state, action) => {
      state.searchQuery = action.payload;
    }
    , 
    getMarvelMovie:(state,action) => {
      state.marvelMovie = action.payload
    }
    
  },
});


export const {
    getUrl,
    getGenres,
    setIsNavBarVisible,
    setIsFooterVisible,
    setIsDropDownVisible,
    setuser,
    deleteUser,
    getMovieData,
    getActionData,
    getComedyData,
    getHorrorData,
    getWatchList,
    getCurrentMovie,
    getSearchQuery,
    getMarvelMovie
  } = AppSlice.actions;
  export default AppSlice.reducer;