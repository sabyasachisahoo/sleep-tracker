import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SleepTimer from './components/sleepTimer/SleepTimer'
import Stats from './pages/stats/Stats'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Header from './components/Header'

const App: React.FC = () =>  {

  return (
    <>
     <Header />
     <BrowserRouter>
      <Routes>
        <Route path="/sleep-tracker" element={<Home />} />
        <Route path="/sleep-tracker/tracker" element={<SleepTimer />} />
        <Route path="/sleep-tracker/stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      <Footer/>
      </>
  )
}

export default App
