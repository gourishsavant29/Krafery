import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import OurStory from './pages/OurStory'
import Benefits from './pages/Benefits'
import BrewingProcess from './pages/BrewingProcess'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<ProductDetails />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/brewing-process" element={<BrewingProcess />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
