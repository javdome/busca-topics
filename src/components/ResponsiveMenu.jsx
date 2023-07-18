import { NavLink } from 'react-router-dom'

export default function ResponsiveMenu({ filterAll, setFilterAll }) {
    return (
        <div id="menu-responsive">
            <span
                onClick={() => setFilterAll(!filterAll)}
                style={filterAll ? { backgroundColor: '#a2ec9d' } : {}}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    fill="#0a0a0a"
                    viewBox="0 0 256 256"
                >
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                        d="M42.1,48H213.9a8,8,0,0,1,5.9,13.4l-65.7,72.3a7.8,7.8,0,0,0-2.1,5.4v56.6a7.9,7.9,0,0,1-3.6,6.7l-32,21.3a8,8,0,0,1-12.4-6.6v-78a7.8,7.8,0,0,0-2.1-5.4L36.2,61.4A8,8,0,0,1,42.1,48Z"
                        fill="none"
                        stroke="#0a0a0a"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                </svg>
            </span>
            <div className="sub-menu">
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    to="/topics"
                >
                    Topics
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    to="/tracks"
                >
                    Tracks
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    to="/disciplines"
                >
                    Disciplines
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    to="/topics-tracks"
                >
                    T & T
                </NavLink>
            </div>
            <NavLink id="back-button" to="/">
                Menu
            </NavLink>
        </div>
    )
}
