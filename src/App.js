import React,{useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { GridCharacter } from './components/characters/GridCharacter'
import { Navbar } from './components/Navbar'
import { GridEpisodes } from './components/episodes/GridEpisodes'
import { GridQuote } from './components/quotes/GridQuote'
import { Home } from './components/Home'





const App = () => {



  return (
    <>


    <Router>
      
    <Navbar />
    {/* <Home/> */}


    <Route exact path="/">
    <Home/>
    </Route>

    <Route exact path="/characters">
    <GridCharacter/>
    </Route>

    <Route exact path="/episodes">
      <GridEpisodes/>
    </Route>

    <Route exact path="/quotes">
      <GridQuote/>
    </Route>



    </Router>
    </>
  )
}
export default App