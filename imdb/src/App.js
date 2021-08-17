import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './components/Layout/Nav'
import Foot from './components/Layout/footer'
// import Movies from './components/movie/movieComp'
import Movie from './components/movie/movies'
// import Search from './components/movie/searchComp'
import Landing from './components/movie/landing'

//Routing the components

function App() {
  return (
    <div>
    <Router>
    <Nav/>
        
        {/* <Search/>
        <Movies/> */}
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route exact path='/movies/:id' component={Movie}>
          
        </Route>
      <Foot/>
    </Router>
      
    </div>
  );
}

export default App;
