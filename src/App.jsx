import { Fragment } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Button from './components/Button/Button'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Fragment>
      <Header/>
      <Slider/>
      <Button/>
      <Footer/>
    </Fragment>
  )
}

export default App
