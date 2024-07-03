import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Sort from './sort/Sort';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  //console.log(pageNumber);
  let[fetchedData, updateFetchedData] = useState([]);
  let { results} = fetchedData;

  //console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(()=>{

    (async function () {
      let data = await fetch(api).then((res) =>res.json());
      //console.log(data);
      updateFetchedData(data);
   })();
  },[api]);

  return(
  
    <div className="App">
      <h1 className="text-center my-4">Rick and Morty Show </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
      <Sort/>
        <div className="row">
        
          <div className="col-4">
          
            <Filters/>
            </div>
            
        
          
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards results={results}/>
            </div>
            
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      
    </div>
  );
}

export default App;
