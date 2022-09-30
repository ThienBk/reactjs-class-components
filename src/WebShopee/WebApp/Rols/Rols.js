import React, { Component } from "react";

export default class Rols extends Component {
  render() {
    return (
      <div className="rols">
        <img src="img/rols.jpg" style={{width: "1210px"}} className="rols-img" />
        <div className="rols-bottom">
          <p className="rols-p">Sản phẩm bán chạy</p>
          <a className="rols-link" href="/">
            Xem thêm &gt;
          </a>
        </div>
      </div>
    );
  }
}
