import React from 'react';
import {Switch, Route, Redirect} from 'react-router'
import Signin from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

export default function Router() {
  return (
   
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route  exact path="/signUp" component={SignUp} />
      <Redirect from="*" to="/" />
    </Switch>
   
  );
}
