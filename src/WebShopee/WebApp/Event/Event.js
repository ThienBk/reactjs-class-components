import React, { Component } from "react";

export default class Event extends Component {
  render() {
    return (
      <div className="conatiner extral-sale">
        <div className="row">
          <div className="col-md-12 d-sm-none d-none">
            <img
              src="img/content-header-img.jpg"
              width="1210px"
              className="content-header-img"
            />
            <div className="extral-content">
              <div className="extral-list d-flex">
                <ul className="col-md-6">
                  <div className="extral-list-1 d-flex justify-content-between">
                    <li className="extral-list-item extral-p">
                      <a href=".">SẢN PHẨM BÁN CHẠY</a>
                    </li>
                    <li className="extral-list-item">
                      <a href=".">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                      </a>
                    </li>
                  </div>
                  <div className="extral-produce d-flex justify-content-evenly">
                    <div className="extral-produce-1 text-center">
                      <div className="sale d-flex flex-column">
                        <span className="extral-p">50%</span>
                        <span>GIẢM</span>
                      </div>
                      <img
                        src="img/extral-img-1.jpg"
                        width="162px"
                        height="162px"
                        alt=""
                      />
                      <p className="extral-p">₫50.000</p>
                    </div>
                    <div className="extral-produce-1 text-center">
                      <div className="sale d-flex flex-column">
                        <span className="extral-p">50%</span>
                        <span>GIẢM</span>
                      </div>
                      <img
                        src="img/extral-img-2.png"
                        width="162px"
                        height="162px"
                        alt=""
                      />
                      <p className="extral-p">₫159.000</p>
                    </div>
                    <div className="extral-produce-1 text-center">
                      <div className="sale d-flex flex-column">
                        <span className="extral-p">50%</span>
                        <span>GIẢM</span>
                      </div>
                      <img
                        src="img/extral-img-3.jpg"
                        width="162px"
                        height="162px"
                        alt=""
                      />
                      <p className="extral-p">₫155.000</p>
                    </div>
                  </div>
                </ul>
                <ul className="col-md-6">
                  <div className="extral-list-2 d-flex justify-content-between">
                    <li className="extral-list-item extral-p">
                      <a href=".">THƯƠNG HIỆU NỔI BẬT</a>
                    </li>
                    <li className="extral-list-item extral-list-item-2">
                      <a href=".">
                        Xem thêm
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                      </a>
                    </li>
                  </div>
                  <div className="extral-produce ex-produce-2 d-flex justify-content-evenly">
                    <div className="extral-produce-2 text-center">
                      <img
                        src="img/extral-img-4.jpg"
                        width="162px"
                        height="162px"
                        alt=""
                      />
                      <p className="extral-p">FOCALLURE</p>
                    </div>
                    <div className="extral-produce-2 text-center">
                      <img
                        src="img/extral-img-5.jpg"
                        width="162px"
                        height="162px"
                        alt=""
                      />
                      <p className="extral-p">LANBENA VN</p>
                    </div>
                    <div className="extral-produce-2 text-center">
                      <img
                        src="img/extral-img-6.jpg"
                        width="162px"
                        height="162px"
                        alt=""
                      />
                      <p className="extral-p">THIÊN LONG</p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <img src="img/content-extral-end.jpg" width="1210px" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
