import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { tracks } from '../assets/data'

const tracksPage = ({filterAll, setFilterAll})=> {
  const [inputText, setInputText] = useState("")
  const [filterData, setFilterData] = useState (tracks)

  const inputElement = useRef();

  function inputHandler (e) {
    // setInputText(e.target.value)
    // let lowerCase = e.target.value.toLowerCase()
    setInputText(inputElement.current.value)
    let lowerCase = inputElement.current.value.toLowerCase()

    const newArray = tracks.map( function (track) { 
      return {
         title: track.title, 
         data: track.data.filter(el => el.toLowerCase().includes(lowerCase))
       }
     })
 
     setFilterData (newArray)
  }

  function cleanInput () {
    inputElement.current.value = ""
    inputHandler()
  }

  return (
    <div className="container">
      <h1>Tracks</h1>

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


        {filterData.map((track, index) =>
          <div className='bloque'>
            {/* {track.data && <p key={ index }>{track.title}</p>} */}
            {(!filterAll || track.data.length >0) && <p key={ index }>{track.title}</p>}
            <ul className="">
            {track.data.map((el, ind2) =>
              <li key={ index + '_' + ind2 }>{el.slice(0, 1) + el.slice(2)} </li>
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

export default tracksPage