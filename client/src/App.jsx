import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Layout from './Pages/Layout.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import Preview from './Pages/Preview.jsx'
import ResumeBuilder from './Pages/ResumeBuilder.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='view/:resumeId' element={<Preview/>}/>
        <Route path='app' element={<Layout/>}>
          <Route index element={<DashBoard/>}/>
          <Route path='view/:resumeId' element={<Preview/>} />
          <Route path='builder/:resumeId' element={<ResumeBuilder/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
