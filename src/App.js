import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/navbar';
import Home from './home';
import About from './about';
import Price from './price';





function App() {


  return (
  <>
   
    
    <Router>
    <NavBar/>
  
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/' component={Home} exact />
      <Route path='/price' component={Price} />
    </Switch>
    
  
    </Router>
  </>
    
  );
}

export default App;
