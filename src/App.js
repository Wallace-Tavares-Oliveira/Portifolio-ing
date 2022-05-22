import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Cards } from './components/Cards/Cards';
import { Filters } from './components/Filters/Filters';


function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=2${pageNumber}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      console.log(data.results);
    })()  
  },[api])

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-5"><span className='text-primary'>Wallace Oliveira</span> portifolio</h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>

          <div className="col-8">
            <div className="row">
                <Cards />
                <Cards />
                <Cards />
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
