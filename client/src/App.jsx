import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Layout from './Pages/Layout'
import DashBoard from './Pages/DashBoard'
import Preview from './Pages/Preview'
import ResumeBuilder from './Pages/ResumeBuilder'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
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