import { Link } from 'react-router-dom'
import { useState } from 'react'
import { topics } from '../assets/data'

const topicsPage = ()=> {
  const [inputText, setInputText] = useState("")
  const [filterData, setFilterData] = useState(topics)

  function inputHandler (e) {
    setInputText(e.target.value)
    let lowerCase = e.target.value.toLowerCase()
    // setFilterData (topics.filter(el => el.toLowerCase().includes(lowerCase)))

    const newArray = topics.map( function (topic) { 
     return {
        title: topic.title, 
        data: topic.data.filter(el => el.toLowerCase().includes(lowerCase))
      }
    })

    setFilterData (newArray)
  }

  return (
    <div className="container">
      <h1>Topics</h1>

      <input
        type="text"
        placeholder="Texto a buscar..."
        value={ inputText }
        onChange = {inputHandler}
        autoFocus/>

      
        {filterData.map((topic, index) =>
          <div className='bloque'>
            {topic.data && <p key={ index }>{topic.title}</p>}
            <ul className="">
            {topic.data.map((el, ind2) =>
              <li key={ index + '_' + ind2 }>{el}</li>
            )}
            </ul>
          </div>
        )}


      <Link id="back-button" to="/">Menu</Link>

    </div>
  )
}

export default topicsPage