import { Link } from 'react-router-dom'
import { useState } from 'react'
import { tracks } from '../assets/data'

const tracksPage = ()=> {
  const [inputText, setInputText] = useState("")
  const [filterData, setFilterData] = useState (tracks)

  function inputHandler (e) {
    setInputText(e.target.value)
    let lowerCase = e.target.value.toLowerCase()
    setFilterData (tracks.filter(el => el.toLowerCase().includes(lowerCase)))
  }

  return (
    <div className="container">
      <h1>Tracks</h1>

      <input
        type="text"
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

export default tracksPage