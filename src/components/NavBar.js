import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className = 'NavBar'>
            <span>
                <Link className = 'homeBtn' to = '/'>Home</Link>
            </span>
            <span>
                <Link className = 'widget1Btn' to = '/widget1'>Widget 1</Link>
            </span>
        </div>
    )

}


export default NavBar;