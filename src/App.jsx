import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'



const myRouter = createBrowserRouter([
  {path: '/' , element:<Layout /> ,children:[
    {index: true, element: <Home /> },
    {path:'about' , element: <About /> },
    {path:'portfolio' , element: <Portfolio /> },
    {path:'contact' , element: <Contact /> },
    {path:'*' , element: <h5>Not Found Works!!!</h5> },
  ]}
])

export default class App extends Component {
  render() {
    return <>
    
    <RouterProvider router={myRouter} />


    
    
    
    </>
  }
}
