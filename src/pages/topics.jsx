import { Link } from 'react-router-dom'
import { useState } from 'react'
import { topics } from '../assets/data'

const topicsPage = ({filterAll, setFilterAll})=> {
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
            {/* {topic.data && <p key={ index }>{topic.title}</p>} */}
            {(!filterAll || topic.data.length >0) && <p key={ index }>{topic.title}</p>}
            <ul className="">
            {topic.data.map((el, ind2) =>
              <li key={ index + '_' + ind2 }>{el}</li>
            )}
            </ul>
          </div>
        )}

      <div id='menu-responsive'>
        <span onClick={() => setFilterAll(!filterAll)} style={ filterAll ? {backgroundColor: "#a2ec9d"} : {} }>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#0a0a0a" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z" fill="none" stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
        </span>
        <Link id="back-button" to="/">Menu</Link>
      </div>
    </div>
  )
}

export default topicsPage