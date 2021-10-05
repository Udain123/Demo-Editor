import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
  
            <Switch>
                <Route path="/" component={Home} exact/>
            </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;




// <Route path="/" component={Home} exact/>
//              <Route path="/about" component={About}/>
             
//              <Route path="/Diabetes" component={Diabetes}/>
//              <Route path="/Heart" component={Heart}/>
//              <Route path="/Healthy" component={healthy}/>

//             <Route component={Error}/>