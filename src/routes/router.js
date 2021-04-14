/*eslint-disable*/
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login } from "../pages/Login";
import { PageBooks } from "../pages/Books";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Routes() {

  const user = useSelector(selectUser);
//  let dataUSer =
//  !user
//  ?JSON.parse(localStorage.getItem('userauth'))
//  : user;
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Login} />
        <Route path="/books" exact component={()=><PageBooks auth={user}/>} />


      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
