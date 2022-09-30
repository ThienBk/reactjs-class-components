import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-3" />
          <div className="col-md-3" />
          <div className="col-md-3">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="/" tabIndex={-1} aria-disabled="true">
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item" aria-current="page">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
