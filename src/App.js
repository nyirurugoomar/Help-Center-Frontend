
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
