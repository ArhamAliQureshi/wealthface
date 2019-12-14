import React from 'react';
import { PageHeading, Menu, MenuUl, Tab, TabHeading, TabBody } from './StyledComponets';
import PrivacyAndSecurity from './Tabs/PrivacyAndSecurity/template'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';



function Settings() {
  return (
    <div style={{ padding: "2%" }}>
      <PageHeading>Settings</PageHeading>
      <Router basename="/settings">
        <Menu>
          <MenuUl>
            <Link to="/profile">Profile</Link>
            <Link to="/accountsInformation">Accounts Information</Link>
            <Link to="/privacySettings">Privacy & Settings</Link>
            <Link to="/paymentDetails">Payment details</Link>
          </MenuUl>
        </Menu>
        <Switch>
          <Route path="/" exact component={PrivacyAndSecurity} />
        </Switch>
      </Router>
    </div>
  );
}

export default Settings;
