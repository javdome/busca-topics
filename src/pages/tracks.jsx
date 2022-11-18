import { Link } from 'react-router-dom'
import { useState } from 'react'
import { tracks } from '../assets/data'

const tracksPage = ()=> {
  const [inputText, setInputText] = useState("")
  const [filterData, setFilterData] = useState (tracks)

  function inputHandler (e) {
    setInputText(e.target.value)
    let lowerCase = e.target.value.toLowerCase()


    const newArray = tracks.map( function (track) { 
      return {
         title: track.title, 
         data: track.data.filter(el => el.toLowerCase().includes(lowerCase))
       }
     })
 
     setFilterData (newArray)
  }

  return (
    <div className="container">
      <h1>Tracks</h1>

      <input
        type="text"
        placeholder="Texto a buscar..."
        value={ inputText }
        onChange = {inputHandler}/>


        {filterData.map((track, index) =>
          <div className='bloque'>
            {track.data && <p key={ index }>{track.title}</p>}
            <ul className="">
            {track.data.map((el, ind2) =>
              <li key={ index + '_' + ind2 }>{el}</li>
            )}
            </ul>
          </div>
        )}

      <Link id="back-button" to="/">Menu</Link>  
      
    </div>
  )
}

export default tracksPage