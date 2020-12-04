import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Codeforces from './Codeforces/Codeforces';
import { FullScreenError } from './Common/Common';
import Navbar from './Navbar/Navbar';
import Problems from './Problems/Problems';
import Home from './Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location } = this.props;
    const { pathname } = location;
    return (
      <div>
        <Navbar pathname={pathname} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/codeforces" component={Codeforces} />
          <Route exact path="/problems" component={Problems} />
          <Route component={FullScreenError} />
        </Switch>
      </div>
    );
  }
}

export default App;
