import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Authentication/Register/Register';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import ExploreInventory from './Pages/ExploreInventory/ExploreInventory/ExploreInventory';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/inventory">
              <ExploreInventory></ExploreInventory>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* <Route path="/about">
              <About></About>
            </Route>
            <Route path="/refer">
              <Refer></Refer>
            </Route>
            
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manage-orders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-new-plan">
              <NewTourPlan></NewTourPlan>
            </PrivateRoute>
            
            <Route path="/*">
              <PageNotFound></PageNotFound>
            </Route>
           */}
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
