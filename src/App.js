
import './App.css';
import MainComponent from "./components/MainComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {ConfigureStore} from './redux/ConfigureStore';
 import {Provider} from 'react-redux';

 const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
    <Router>
     <MainComponent></MainComponent>
      </Router>
      </Provider>
  );
}

export default App;
