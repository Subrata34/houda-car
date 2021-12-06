import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import Login from './Components/Login/Login';
import Registrater from './Components/Resgistration/Registrater';
import NewFrom from './Components/Newfrom/NewFrom';
import NotFound from './Components/NotFound/NotFound';
import Admin from './Components/Admin/Admin';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <PrivateRoute path="/booking/:serviceId">
        <NewFrom></NewFrom>
      </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Registrater></Registrater>
      </Route>
      <Route path="/admin">
        <Admin></Admin>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
