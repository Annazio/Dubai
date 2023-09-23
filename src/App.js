import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import BlogPage from "./pages/BlogPage/BlogPage"
import ServicesPage from "./pages/ServicesPage/ServicesPage"
import ContactPage from "./pages/ContactPage/ContactPage"

function App() {
  return (
    <div className="app">
     <Header />
     <Routes>
       <Route path="/" element={<MainPage />} />
       <Route path="/blog" element={<BlogPage />} />
       <Route path="/about" element={<ServicesPage />} />
       <Route path="/contacts" element={<ContactPage />} />
     </Routes>

     <Footer />
     

    </div>
  );
}

export default App;

// hjhjk