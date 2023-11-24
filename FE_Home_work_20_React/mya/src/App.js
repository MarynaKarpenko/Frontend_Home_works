import './App.css';
import About from './components/About/About';
import Advertising from './components/Advertising/Advertising';
import FriendImage from './components/FriendImage/FriendImage';
import Header from './components/Header/Header';
import Offers from './components/Offers/Offers';
import Rent from './components/Rent/Rent';

function App() {
  return (
   <div>
    <Header/>
    <About/>
    <Advertising/>
    <FriendImage/>
    <Offers/>
    <Rent/>
   </div>
  );
}

export default App;
