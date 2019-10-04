import React from 'react'
import './App.scss'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import News from './pages/News'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import HelmetWrap from './components/HelmetWrap'
import ScrollToTop from './components/ScrollToTop'
import Translator from './containers/Translator'

function App() {
  return (
    <div className="App">
      <HelmetWrap />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Translator />
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/news" render={() => <News />} />
            <Route exact path="/en" render={() => <Home />} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
