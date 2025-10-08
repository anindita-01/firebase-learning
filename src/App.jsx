
import { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import {db} from "./config/firebase";
import {getDocs, collection} from "firebase/firestore";
import Display from './components/Display';
import Create from './components/Create';


function App() {
  
  const [movieList, setMovieList]= useState([]);
  const moviesCollectionRef= collection(db, "movies")

  useEffect(()=>{
    const getMovieList=async()=>{
      //READ THE DATA

      try{
     const data= await getDocs(moviesCollectionRef);
     const filteredData= data.docs.map((doc)=>({...doc.data(), id: doc.id}))
     setMovieList(filteredData);
      } catch(err){
        console.error(err);
      }
      //SET THE MOVIE LIST
    }
getMovieList();


  },[])


  return (
    <>
      <div className='font-bold flex justify-center p-10 text-3xl '>Firebase</div>
      <Auth/>
      <Display movieList={movieList}/>
      <Create/>

    
    </>
  )
}

export default App
