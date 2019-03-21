import React, { Component } from "react";

import MainPage from "./MainPage";
import Footer from "./Footer";
/**
 * App - includes main component and footer component
 */
class App extends Component {
  render() {
    return (
      <div>
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
