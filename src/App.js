// import './App.scss';
import { SearchPage } from './components/Search/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import { BlogSearchPage } from './components/BlogSearch/BlogSearchPage';
import { BlogPage } from './components/BlogPage/BlogPage';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/search">
          <SearchPage/>
          </Route>

          <Route path="/" exact>
       <BlogPage/>
          </Route>
          <Route path="/blogserach" exact>
          <BlogSearchPage/>
          </Route>
    
        </Switch>
      </Router>
    </>
     

 
  );
}

export default App;
