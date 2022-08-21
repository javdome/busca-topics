import { useState } from 'react'
import { disciplines } from '../assets/disciplines'



const disciplinesPage = ()=> {
  const [inputText, setInputText] = useState("")
  const [filterDiscipline, setFilterDiscipline] = useState (disciplines)

  function inputHandler (e) {
    // setInputText(lowerCase)
    setInputText(e.target.value)
    let lowerCase = e.target.value.toLowerCase()
    
    let filteredData = disciplines.filter(el =>{
      if (lowerCase === "") {
        return el
      } else {
        return el.toLowerCase().includes(lowerCase)
      }
    })
    setFilterDiscipline(filteredData)
  }

  return (
    <div className="">
      <h1>Disciplines</h1>

      <input
        type="text"
        value={ inputText }
        onChange = {inputHandler}/>

      <ul>
        {filterDiscipline.map((discipline, index) =>
          <li key={ index }>{discipline}</li>
        )}
      </ul>

    </div>
  )
}

export default disciplinesPage