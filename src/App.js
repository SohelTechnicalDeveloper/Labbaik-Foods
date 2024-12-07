import './App.css';
import Category from './Components/Category';
import Foods from './Components/Foods';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <Foods/>
      <Footer/>
     
    </div>
  );
}

export default App;
