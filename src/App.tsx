import { BrowserRouter as Router, Routes, Route, useFetcher } from 'react-router-dom'
import Home from './components/Home'
// import Navbar from './components/Navbar' 
// import AnimalCard from './components/AnimalCard'
// import Signup from './components/Signup'
// import Login from './components/Login'
// import AddAnimal from './components/AddAnimal'
// import { useEffect, useState } from 'react'
// import ShowAnimal from './components/ShowAnimal'
import AllAnimals from './components/AllAnimals'
import axios from 'axios'
 import react from 'react'





function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/allanimals" element={< AllAnimals />}/>
        {/* <Route path="/animalcard" element={< AnimalCard />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/login" element={< Login fetchUser={fetchUser}/>} />
        <Route path="/addanimal" element={< AddAnimal />} />
        <Route path="/animal/:animalId" element={< ShowAnimal user={user} />}/> */}
      </Routes>
    </Router>
  )
}

export default App
