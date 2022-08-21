import { Link } from "react-router-dom"

const Home = ()=> {

  return (
    <div className="menu">
        <h1>Buscador Iceri22</h1>
        {/* <Link to="/">Home</Link> */}
        <Link to="/disciplines">Disciplines</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/tracks">Tracks</Link>
        {/* <Link to="/products">Products</Link> */}

    </div>
  )
}

export default Home