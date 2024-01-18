import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HomeMain from './routes/HomeMain'
import Home from './routes/Home'
import SearchProfile from './routes/SearchProfile'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeMain />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="searchprofile" element={<SearchProfile />} />
      </Route>
    </Routes>
  </BrowserRouter>

)