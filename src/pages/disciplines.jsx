import { Link } from 'react-router-dom'
import { useState } from 'react'
import { disciplines } from '../assets/data'

const disciplinesPage = ()=> {
  const [inputText, setInputText] = useState("")
  const [filterData, setFilterData] = useState (disciplines)

  function inputHandler (e) {
    setInputText(e.target.value)
    let lowerCase = e.target.value.toLowerCase()
    setFilterData (disciplines.filter(el => el.toLowerCase().includes(lowerCase)))
  }

  return (
    <div className="container">
      <h1>Disciplines</h1>

      <input
        type="text"
        placeholder="Texto a buscar..."
        value={ inputText }
        onChange = {inputHandler}/>

      <ul className="listado">
        {filterData.map((data, index) =>
          <li key={ index }>{data}</li>
        )}
      </ul>

      <Link id="back-button" to="/">Menu</Link>

    </div>
  )
}

export default disciplinesPage