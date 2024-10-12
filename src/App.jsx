import { useState } from 'react'

import Navbar from './components/Navbar'
import NewsBlock from './components/NewsBlock'
import Map from './components/Map'

import './App.css'


const App = () => {

    const [mapState, setMapState] = useState(false)

    const showMap = () => {
        setMapState(!mapState)
    }

    console.log(mapState)

    return (
        <>
            <Navbar showMap={showMap}/>

            {mapState && <Map />}
            {/* setting max window width on screen */}
            <div style={{ maxWidth: "1500px", padding: "8rem" }}>
                <main>
                    <NewsBlock />
                    <NewsBlock />
                    <NewsBlock />
                </main>

            </div>
        </>
    )
}

export default App
