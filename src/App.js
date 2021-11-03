// import './App.scss';
import { SearchPage } from './components/Search/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import { BlogSearchPage } from './components/BlogSearch/BlogSearchPage';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/search">
          <SearchPage/>
          </Route>
          <Route path="/">
          <BlogSearchPage/>
          </Route>
    
        </Switch>
      </Router>
    </>
     

 
  );
}

export default App;
