import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import SidebarNav from './Components/SidebarNav';

// Pages
import Dashboard from './pages/dashboard';
import Management from './pages/managment';
import NotFoundComponent from './pages/notfound';

import styles from '../src/assets/scss/index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={styles.pageContainer}>
        <Router>
          <Route
            render={({ location }) => (
              <React.Fragment>
                <Sidebar>
                  <SidebarNav location={location} />
                </Sidebar>
                <div className={styles.contentContainer}>

                  <Switch location={location}>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/management" component={Management} />
                    <Route component={NotFoundComponent} />
                  </Switch>

                </div>
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    );
  }
}
ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  , document.getElementById('app'),
);

