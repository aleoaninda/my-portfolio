import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} exact path='/'></Route>
        <Route component={About} path='/about'></Route>
        <Route component={SinglePost} path='/post/:slug'></Route>
        <Route component={Post} path='/post'></Route>
        <Route component={Project} path='/project'></Route>
        <Route component={Contact} path='/contact'></Route>
        <Route component={Education} path='/education'></Route>
        <Route component={Experience} path='/experience'></Route>
        <Route component={Skills} path='/skills'></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
