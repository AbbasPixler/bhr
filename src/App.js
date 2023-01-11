import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Features from './components/pages/features/Features'
import Premium_Shop from './components/pages/premiumShop/PremiumShop'
import Firearms from './components/pages/firearms/Firearms'
import Community from './components/pages/community/Community'
import Buy_Credits from './components/pages/buyCredits/BuyCredits'

import AllNews from './components/pages/allNews/AllNews';
import SingleNews from './components/pages/singleNews/SingleNews';
import Footer from './components/footer/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/features" element={<Features />}></Route>
        <Route exact path="/premium-shop" element={<Premium_Shop />}></Route>
        <Route exact path="/firearms" element={<Firearms />}></Route>
        <Route exact path="/community" element={<Community />}></Route>
        <Route exact path="/buy-credits" element={<Buy_Credits />}></Route>
        <Route exact path="/all-news" element={<AllNews />}></Route>
        <Route exact path="/single-news" element={<SingleNews />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
