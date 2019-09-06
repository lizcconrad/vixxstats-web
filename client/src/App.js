import React from 'react';
import { withTheme } from 'styled-components';
import { BrowserRouter, Route } from "react-router-dom";
import HourlyStats from './datadisplay/HourlyStats';
import MemberPage from './MemberPage';


function App (props) {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HourlyStats} />
      <Route path="/members/:member_name?" component={MemberPage} />
    </BrowserRouter>
  );
}

export default withTheme(App);
