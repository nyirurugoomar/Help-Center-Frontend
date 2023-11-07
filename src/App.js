
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Card/>
    </div>
  );
}

export default App;
