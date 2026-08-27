import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ArticlesIndex from './pages/ArticlesIndex'
import ArticlePage from './pages/ArticlePage'
import CategoryPage from './pages/CategoryPage'
import VehiclesIndex from './pages/VehiclesIndex'
import VehiclePage from './pages/VehiclePage'
import ReviewsIndex from './pages/ReviewsIndex'
import ReviewPage from './pages/ReviewPage'
import EngineeringIndex from './pages/EngineeringIndex'
import BuyingGuidesIndex from './pages/BuyingGuidesIndex'
import About from './pages/About'
import Contact from './pages/Contact'
import Search from './pages/Search'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesIndex />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/vehicles" element={<VehiclesIndex />} />
          <Route path="/vehicles/:slug" element={<VehiclePage />} />
          <Route path="/reviews" element={<ReviewsIndex />} />
          <Route path="/reviews/:slug" element={<ReviewPage />} />
          <Route path="/engineering" element={<EngineeringIndex />} />
          <Route path="/buying-guides" element={<BuyingGuidesIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/legal/:slug" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
