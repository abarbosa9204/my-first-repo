import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Prueba } from './components/cv_angel';
// import { Container, Row, Col, Card } from 'react-bootstrap'
//import {prueba} from './components/cv_angel'

function App() {
  return (
    <>
      <div id="id-prueba">
        <Prueba></Prueba>
      </div>
    </>
  );
  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )
  // const [nombre, setNombre] = useState()
  // console.log("este es el nombre", nombre);
  // setNombre("natalia")
  // console.log("este es el nombre", nombre);
  // return (
  //   <>
  //     <section >
  //       <form onSubmit={(e) => { e.preventDefault(); }}>
  //         <label>
  //           Nombre :
  //           <input type="text" name="name" placeholder='ingrese su nombre' value={() => { }} onChange={() => { }}> </input>
  //         </label>
  //         <input type="submit" value="submit"></input>
  //       </form>
  //     </section>
  //   </>
  // );
}

export default App;
