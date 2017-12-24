import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './routes/Login';
import Company from './routes/Company';
import Detail from './routes/Detail';

class App extends React.Component {
    
    render(){
        return(
            <Router>
                <div className="container">
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route exact path="/company" component={Company}></Route>
                        <Route path="/company/:id" component={Detail}></Route>
                    </Switch> 
                </div>
            </Router>
        )
    }
}

export default App;