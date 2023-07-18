import { useState, useRef } from 'react'
import { topics, tracks } from '../assets/data'
import ResponsiveMenu from '../components/ResponsiveMenu'
import TopicLists from '../components/TopicLists'
import TrackLists from '../components/TrackLists'

const topicsTracksPage = ({ filterAll, setFilterAll }) => {
    const [inputText, setInputText] = useState('')
    const [filterTopics, setFilterTopics] = useState(topics)
    const [filterTracks, setFilterTracks] = useState(tracks)

    const inputElement = useRef()

    function inputHandler(e) {
        setInputText(inputElement.current.value)
        let lowerCase = inputElement.current.value.toLowerCase()
        // setFilterTopics (topics.filter(el => el.toLowerCase().includes(lowerCase)))

        const newArrayTopics = topics.map(function (topic) {
            return {
                title: topic.title,
                data: topic.data.filter((el) => el.toLowerCase().includes(lowerCase)),
            }
        })

        setFilterTopics(newArrayTopics)

        const newArrayTracks = tracks.map(function (track) {
            return {
                title: track.title,
                data: track.data.filter((el) => el.toLowerCase().includes(lowerCase)),
            }
        })

        setFilterTracks(newArrayTracks)
    }

    function cleanInput() {
        inputElement.current.value = ''
        inputElement.current.focus()
        inputHandler()
    }

    return (
        <div className="container">
            <h1>Topics & Tracks</h1>

            <input
                type="text"
                placeholder="Texto a buscar..."
                value={inputText}
                onChange={inputHandler}
                // onBlur={(e) => e.target.focus()}
                autoFocus
                ref={inputElement}
            />

            <button id="boton-borra" onClick={cleanInput}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.75rem"
                    height="1.75rem"
                    fill="#f90606"
                    viewBox="0 0 256 256"
                >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                        x1="216"
                        y1="56"
                        x2="40"
                        y2="56"
                        fill="none"
                        stroke="#f90606"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                    <line
                        x1="104"
                        y1="104"
                        x2="104"
                        y2="168"
                        fill="none"
                        stroke="#f90606"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                    <line
                        x1="152"
                        y1="104"
                        x2="152"
                        y2="168"
                        fill="none"
                        stroke="#f90606"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                    <path
                        d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                        fill="none"
                        stroke="#f90606"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                    <path
                        d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                        fill="none"
                        stroke="#f90606"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                </svg>
            </button>
            <h2>Topics</h2>
            <TopicLists filterTopics={filterTopics} filterAll={filterAll} />
            <hr />
            <h2 style={{ marginTop: '25px' }}>Tracks</h2>
            <TrackLists filterTracks={filterTracks} filterAll={filterAll} />

            <ResponsiveMenu filterAll={filterAll} setFilterAll={setFilterAll} />
        </div>
    )
}

export default topicsTracksPage
