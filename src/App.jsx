import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {
  const [sidebar,setsideBar]=useState(true);
  return (
    <div>
      <NavBar setsideBar={setsideBar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
