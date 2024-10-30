import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n =15;
  const [name] = useState("Gustavo");
  const redTitle = false;
  return (
    <div className ="App">
      {/* CSS global */}
      <h1>React CSS</h1>

      {/*CSS de compomente */}
      <MyComponent />
      <p>Esse parágrafo é do App.jsx</p>
      {/**Inline CSS */}
      <p style={{
            color: "white",
            backgroundColor: "blue", 
            padding:"25px", 
            borderTop: "2px solid red"
          }}>
            Este elemento foi estilizado de forma inline
      </p>
      {/** CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink", backgroundColor:"red"})}>
        CSS dinâmico
      </h2>
      <h2 style={name ==="Gustavo" ? ({color: "red", backgroundColor: "pink"}) : null}>
        CSS dinâmico
      </h2>
      {/** Classe dinâmica */}
      <h2 className= {redTitle ? "red-title" : "title"}> Este titulo vai ter classe dinâmica</h2>
      {/** CSS Modules */}
      <Title />
    </div>
  )
}

export default App
