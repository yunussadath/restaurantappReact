import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import Viewrestaurant from './components/Viewrestaurant';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
        <header className="App-header">
         <Header/>
         {/* <h1>Restaurant Application</h1> */}
         <Routes>
         <Route path='/'element={<Restaurantlist/>}/>
         <Route path='/Viewrestaurant/:id'element={<Viewrestaurant/>}/>
          </Routes>

         <Footer/>
         
        </header>
     </Router>
    </div>
  );
}

export default App;
