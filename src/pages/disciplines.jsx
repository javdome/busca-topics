import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { disciplines } from '../assets/data'

const disciplinesPage = ()=> {
  const [inputText, setInputText] = useState("")
  const [filterData, setFilterData] = useState (disciplines)

  const inputElement = useRef();

  function inputHandler (e) {
    setInputText(inputElement.current.value)
    let lowerCase = inputElement.current.value.toLowerCase()
    setFilterData (disciplines.filter(el => el.toLowerCase().includes(lowerCase)))
  }

  function cleanInput () {
    inputElement.current.value = ""
    inputHandler()
  }

  return (
    <div className="container">
      <h1>Disciplines</h1>

      <input
        type="text"
        placeholder="Texto a buscar..."
        value={ inputText }
        onChange = {inputHandler}
        onBlur={(e) => e.target.focus()}
        autoFocus
        ref={inputElement}
      />

      <button id='boton-borra' onClick={cleanInput}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="1.75rem" fill="#f90606" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="#f90606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="104" y1="104" x2="104" y2="168" fill="none" stroke="#f90606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="152" y1="104" x2="152" y2="168" fill="none" stroke="#f90606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="#f90606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke="#f90606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
      </button>

      <ul className="listado">
        {filterData.map((data, index) =>
          <li key={ index }>{data}</li>
        )}
      </ul>

      <div id='menu-responsive'>
        <Link id="back-button" to="/">Menu</Link>
      </div>

    </div>
  )
}

export default disciplinesPage