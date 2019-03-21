import React, { Component } from "react";
/**
 * Footer
 */
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ui vertical footer segment">
        <div className="ui center aligned container">
          <h5 className="ui  header">
            &copy; Copyright 2019 | All rights reserved | Rohit Raj
            <a
              href="https://www.facebook.com/qzelt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="facebook square icon big" />
            </a>
          </h5>
        </div>
      </div>
    );
  }
}

export default Footer;
