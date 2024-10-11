import React, { useState } from 'react'

import NavStyles from "../styles/components/Navbar.module.css"

const Navbar = () => {

    const [mapState, setMapState] = useState(false)

    return (
        <nav className={NavStyles.navbar}>
            <button type='button' onClick={() => setMapState(!mapState)}>Map</button>
        </nav>
    )
}

export default Navbar
