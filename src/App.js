import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ReferPage from './pages/ReferPage';

function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={<ReferPage/>} />
      </Routes>

      <DownloadSection/>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
