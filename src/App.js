import './App.css';
import Navbar from './components/Navbar'
import Video_section from './components/Video_section'
import Rise from './components/Rise'
import Box from './components/Box';
import Supply_chain from './components/Supply_chain';
import Products from './components/Products';
import Company from './components/Company';
import Started from './components/Started';
import Laptop from './components/Laptop';
import Industries from './components/Industries';
import Trade from './components/Trade';
import Video_section2 from './components/Video_section2';
import Blogs from './components/Blogs';
import Box2 from './components/Box2';
import Subscribe from './components/Subscribe';
import Location from './components/Location';
import Product_list from './components/Product_list';
import Footer from './components/Footer';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Top/>
      <Navbar/>
      <div className='Complete_mid_main'>
        <div className='Complete_mid_sec'>
        <Video_section/>
        <Rise/>
        <Box/>
        <div className='Products_supply'>
          <Supply_chain/>
          <Products/>
        </div>
        <Company/>
        <Started/>
        <Laptop/>
        <Industries/>
        <Trade/>
        <Video_section2/>
        <Blogs/>
        </div>
      </div>
      <Box2/>
      <Subscribe/>
      <Location/>
      <Product_list/>
      <Footer/> 
    </div>
  );
}

export default App;
