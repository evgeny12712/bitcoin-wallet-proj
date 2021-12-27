import './assets/scss/global.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleLeft, faUserEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ContactDetails } from './pages/ContactDetails';
import { StatisticPage } from './pages/StatisticPage';
import { AppHeader } from './cmps/AppHeader';
import { ContactEdit } from './pages/ContactEdit';
library.add(fab, faArrowCircleLeft, faUserEdit, faTrash, faUserPlus);

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <main>
            <Switch>
              <Route component={ContactEdit} path="/contact/edit/:id?" />
              <Route component={ContactDetails} path="/contact/details/:id" />
              <Route component={ContactPage} path="/contacts" />
              <Route component={StatisticPage} path="/statistic" />
              <Route component={HomePage} path="/" />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
