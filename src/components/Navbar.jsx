import NavStyles from "../styles/components/Navbar.module.css"

const Navbar = ({ showMap }) => {


    return (
        <nav className={NavStyles.navbar}>
            <button type='button' onClick={showMap}>Map</button>
        </nav>
    )
}

export default Navbar
