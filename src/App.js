import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import BarChart from "./animated-bar/src/helper";
import Trees from './collapsible-tree/src/trees';
import Example1 from './react-vertex/src/sphere';
function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/animated-bar">Animated Bar</Link>
              </li>
              <li>
                <Link to="/collapsible-tree">Collapsible Tree</Link>
              </li>
              <li>
                <Link to="/react-vertex">React Vertex</Link>
              </li>
            </ul>
          </nav>

          <Route path="/animated-bar" component={BarChart} />
          <Route path="/collapsible-tree" component={Trees} />
          <Route path="/react-vertex" component={Example1} />
        </div>
      </Router>
  );
}

export default App;
