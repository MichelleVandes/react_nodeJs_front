import React from "react" //https://www.youtube.com/watch?v=E0cCbJiz65U&list=PLcfNN5yIpSA2jNipgXy3oaBZM_HCyRivm&index=2&t=26s
//https://gitlab.com/benopen/blog-react/-/tree/master/
import { HashRouter, Route, Switch} from "react-router";
import SignupForm from "./Components/SignupForm"
import HomePage from "./HomePAge"

function App() {
   
    
    return (
      <HashRouter>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Signup" component={SignupForm} />
          </Switch>
        </div>
      </HashRouter>
    );


}

export default App;