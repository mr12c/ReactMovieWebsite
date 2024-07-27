import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const tmdbToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNiZThjYzNiNWVmMzJlYTRlOGIwMzZiZWUwNDJiYiIsInN1YiI6IjY1ZWYwYjJmZTcyZmU4MDE2MjViZjIwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NTztL1lCPKhDxpUQzTGkkiIr6MOyp9s0X39RrzfGooE";
const headers = {
  Authorization: "Bearer " + tmdbToken,
};
 
 

const options = {
  method: 'GET',
  url: 'https://moviedatabase8.p.rapidapi.com/Filter',
  params: {
    MinRating: '6.1',
    MaxRating: '9',
    MinYear: '2019',
    MaxYear: '2023',
    MinRevenue: '0',
    MaxRevenue: '100000000',
    Genre: 'Action',
    MinRuntime: '0',
    MaxRuntime: '180',
    OriginalLanguage: 'en',
    SpokenLanguage: 'English',
    Limit: '100'
  },
  headers: {
    'x-rapidapi-key': '632501f4b4msh0f41ff78c2c08d4p176444jsn28abe213ff97',
    'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
  }
};
 

 


 

 
   
  export const fetchDataFromApi2 =  async (genre)=>{
    
const options = {
  method: 'GET',
  url: 'https://moviedatabase8.p.rapidapi.com/Filter',
  params: {
    MinRating: '6.1',
    MaxRating: '9',
    MinYear: '2018',
    MaxYear: '2023',
    MinRevenue: '0',
    MaxRevenue: '100000000',
    Genre:  `${genre}`,
    MinRuntime: '0',
    MaxRuntime: '180',
    OriginalLanguage: 'en',
    SpokenLanguage: 'English',
    Limit: '100'
  },
  headers: {
    'x-rapidapi-key': '632501f4b4msh0f41ff78c2c08d4p176444jsn28abe213ff97',
    'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
  }
};
 
    
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
  }


export const fetchDataFromApi = async (url, params) => {
  try {
    const res = await axios.get(baseUrl + url, { headers, params });
    return res.data;
    
  } catch (err) {
    console.log(err);
  }
};


export const fetchDataFromApi3 = async () => {


const options = {
  method: 'GET',
  url: 'https://movies-api14.p.rapidapi.com/shows',
  headers: {
    'x-rapidapi-key': '632501f4b4msh0f41ff78c2c08d4p176444jsn28abe213ff97',
    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  return response.data;
} catch (error) {
	console.error(error);
}
}



export const fetchDataFromApi4 = async (param) => {
  const options = {
    method: 'GET',
    url: 'https://advanced-movie-search.p.rapidapi.com/search/movie',
    params: {
      query: `${param}`,
      page: '1'
    },
    headers: {
      'x-rapidapi-key': '59b5b44a85msh78c170b0ff896e3p18faf1jsnacbed3c91e75',
      'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


 