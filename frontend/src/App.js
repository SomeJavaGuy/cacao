import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/views/home/Home';
import { Upload } from './components/views/Upload';

function App() {
  return (
    <div className="App">
      <Header />
      <main className=" py-5">
        {/* <Container className="px-0">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"> */}
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
          </Switch>
        </BrowserRouter>
        {/* </Row>
        </Container> */}
      </main>

      <footer>
        some footer
      </footer>
    </div>
  );
}

export default App;
