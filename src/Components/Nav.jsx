import { Link } from "react-router-dom"
import "./Style/nav.css"
const Nav = () => {
    return (
        <>
            <div className="nav">
                <Link to='/PostClassified' className="post">Post Classified</Link>
                <Link to='/BrowseClassified' className="post">Browse Classified</Link>
            </div>
        </>
    )
}

export default Nav