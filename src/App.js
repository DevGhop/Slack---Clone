import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
       <Header/> 
      <div className="app__body">
      {/* Sidebar */} 
        <Sidebar/>

        <Switch>
          <Route path="/room/:roomId">
            <Chat />
          </Route>
          <Route path=""> 
            <h1>Welcome</h1>
          </Route>


        </Switch>

        {/* React-Router -> chat screen */}
       </div> 
      </Router>
    </div>
  );
}

export default App;
