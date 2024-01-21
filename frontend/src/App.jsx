import { Routes, Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Home from './views/Home'

import OurStory from './views/About/OurStory'
import TheTeam from './views/About/TheTeam'
import FAQ from './views/About/FAQ'

import Adopt from './views/Adopt'
import Adoptable from './components/Adoptable'
import Application from './components/Application'
import Learn from './components/Learn'

import Admissions from './views/Admissions'
import Contact from './views/Contact'
import Donate from './views/Donate'
import GetInvolved from './views/GetInvolved'
import News from './views/News'

import Resources from './views/Resources'
import GeneralCare from './components/GeneralCare'
import MedicalAssistance from './components/MedicalAssistance'
import DNR from './components/DNR'


function App() {

  return (
    <>
      {/* navigation -> links to pages*/} 
      <Navigation />

      {/* Routes -> path and component linked to page*/}
      <Routes>
        <Route exact path='/' element={<Home/>}/>

        {/* paths for about drop down */}
        <Route path='/about-bunnagain' element={<OurStory/>}/>
        <Route path='/meet-the-team' element={<TheTeam/>}/>
        <Route path='/faq' element={<FAQ/>}/>

        {/* paths for adoption */}
        <Route path='/adopt' element={<Adopt/>}/>
        <Route path='/rabbits' element={<Adoptable/>}/>
        <Route path='/application' element={<Application/>}/>
        <Route path='/learn-before-you-leap' element={<Learn/>}/>

        <Route path='/rehome' element={<Admissions/>}/>
        <Route path='/get-involved' element={<GetInvolved/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>

        {/* paths for reources */}
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/do-not-release' element={<DNR/>}/>
        <Route path='/general-care' element={<GeneralCare/>}/>
        <Route path='/medical-assistance' element={<MedicalAssistance/>}/>



      </Routes>

      {/* Footer  */}
      <Footer />
    </>
  )
}

export default App
