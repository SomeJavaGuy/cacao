import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/views/home/Home';
import { NotFound } from './components/views/not-found/NotFound';
import { Upload } from './components/views/upload/Upload';

function App() {
  return (
    <div className="App">
      <Header />
      <main className=" py-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>

      <footer>
        some footer
      </footer>
    </div >
  );
}

export default App;
