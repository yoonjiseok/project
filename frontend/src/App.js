import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



import Login from './routes/Login';

class App extends React.Component {
    
  
    

    render(){
        return(
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={login}></Route>
                    <Route path="/company"></Route>
                    <Route path="/company/:id"></Route>
            
                </Switch>
            </div>
            
        
        
        
        
        
        )
    }
    
    
}