import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export class AppHeader extends Component {
  render() {
    return (
      <section>
        <header className="app-header">
          <section className="container flex space-between">
            <NavLink exact to="/">
              <h1 className="logo">₿itwallet</h1>
            </NavLink>
            <nav className="header-nav flex gap">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink exact to="/contacts">
                Contacts
              </NavLink>
              <NavLink exact to="/statistic">
                Statistics
              </NavLink>
            </nav>
          </section>
        </header>
      </section>
    );
  }
}
