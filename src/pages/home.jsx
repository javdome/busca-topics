import { Link } from 'react-router-dom'

const Home = ({ filterAll, setFilterAll }) => {
    const toggleDarkMode = () => {
        let element = document.body
        element.classList.toggle('dark-mode')
    }

    return (
        <div className="menu">
            <h1>Buscador Edulearn23</h1>
            {/* <Link to="/">Home</Link> */}
            <Link to="/topics">Topics</Link>
            <Link to="/tracks">Tracks</Link>
            <Link to="/disciplines">Disciplines</Link>
            {/* <Link to="/products">Products</Link> */}

            <button onClick={toggleDarkMode}>Dark/Light mode</button>
        </div>
    )
}

export default Home
