import React, {Component} from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import jsonData from "./data.json";




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: jsonData
    };
  }

  render() {
    return (
        <div className="App text-secondary">
          <Nav/>
        </div>
    );
  }
}

export default App;
