
import { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import {db} from "./config/firebase";
import {getDocs, collection} from "firebase/firestore";
import Display from './components/Display';
import Create from './components/Create';


function App() {
  
  const [movieList, setMovieList]= useState([]);
  const moviesCollectionRef= collection(db, "movies");



  const getMovieList=async()=>{
    //READ THE DATA
    //SET THE MOVIE LIST

    try{
   const data= await getDocs(moviesCollectionRef);
   const filteredData= data.docs.map((doc)=>({...doc.data(), id: doc.id}))
   setMovieList(filteredData);
    } catch(err){
      console.error(err);
    }

  }
  useEffect(()=>{
getMovieList();


  },[])





  return (
    <>
      <div className='font-bold flex justify-center p-10 text-3xl '>Firebase</div>
      <Auth/>
      <Display movieList={movieList}/>
      <Create moviesCollectionRef={moviesCollectionRef} getMovieList={getMovieList}/>

    
    </>
  )
}

export default App
