import React, { useState } from 'react'
import './App.scss'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import News from './pages/News'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import NewsItems from './data/newsItems.json'
import HelmetWrap from './components/HelmetWrap'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <HelmetWrap />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Header
            toogleShowAccordionMenu={() => {
              show ? setShow(false) : setShow(true)
            }}
            showMenu={show}
          />
          <Switch>
            <Route exact path="/" render={() => <Home items={NewsItems} onInit={() => setShow(false)} />} />
            <Route path="/news" render={() => <News items={NewsItems} onInit={() => setShow(false)} />} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
