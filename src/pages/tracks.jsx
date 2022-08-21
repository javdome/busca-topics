import { useState } from 'react'
import { tracks } from '../assets/data'

const tracksPage = ()=> {
  const [inputText, setInputText] = useState("")
  const [filterData, setFilterData] = useState (tracks)

  function inputHandler (e) {
    // setInputText(lowerCase)
    setInputText(e.target.value)
    let lowerCase = e.target.value.toLowerCase()
    
    let filteredData = tracks.filter(el =>{
      if (lowerCase === "") {
        return el
      } else {
        return el.toLowerCase().includes(lowerCase)
      }
    })
    setFilterData(filteredData)
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

    </div>
  )
}

export default tracksPage