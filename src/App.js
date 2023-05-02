import { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import './App.css'

function App() {

  const [cuenta, setCuenta] = useState(0)
  const [cantidad, setCantidad] = useState(0)

  useEffect(() => {document.title = 'React App'}, [cuenta])

  function contar(e) {
    let numCaracteres = e.target.value.length
    if (numCaracteres > 100){
      alert('Se han ingresado mas caracteres de los permitidos')
    }else
    setCuenta( numCaracteres)
  }
  function contarPalabras(e){  
    let palabra = e.target.value
    var arrayPalabras= palabra.split(" ")
    setCantidad(arrayPalabras.length-1)
    
  }

  return (
    <div className='principalSpace'>
      <p>
        <div className='space'><label>Contar cantidad de caracteres </label></div>
        <InputText onChange={contar} /><br></br>
        {cuenta}
      </p>
      <p>
        <div className='space'><label>Contar cantidad de palabras</label></div>
        <InputText onChange={contarPalabras}/><br></br>
        {cantidad}</p>
    </div>
  );
}

export default App;