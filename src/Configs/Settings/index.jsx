import React from 'react';
import { PageHeading, Menu, MenuUl } from './StyledComponets';
import Profile from './Tabs/Profile/template'
import AccountInformation from './Tabs/AccountInformation/template'
import PrivacyAndSecurity from './Tabs/PrivacyAndSecurity/template'
import PaymentDetails from './Tabs/PaymentDetails/template'
import { HashRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';



function Settings() {
  return (
    <div style={{ padding: "2%" }}>
      <PageHeading>Settings</PageHeading>
      <Router basename="/settings">
        <Menu>
          <MenuUl>
            <NavLink activeClassName='isActive' to="/profile">Profile</NavLink>
            <NavLink activeClassName='isActive' to="/accountsInformation">Accounts Information</NavLink>
            <NavLink activeClassName='isActive' to="/privacySettings">Privacy & Settings</NavLink>
            <NavLink activeClassName='isActive' to="/paymentDetails">Payment details</NavLink>
          </MenuUl>
        </Menu>
        <Switch>
          <Redirect path="/" exact to="/privacySettings" />
          <Route path="/profile" exact component={Profile} />
          <Route path="/accountsInformation" exact component={AccountInformation} />
          <Route path="/privacySettings" exact component={PrivacyAndSecurity} />
          <Route path="/paymentDetails" exact component={PaymentDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default Settings;
