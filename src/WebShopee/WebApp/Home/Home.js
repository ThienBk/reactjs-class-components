import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="conatiner-fluid header">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <button
                class="navbar-toggler header-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="/navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon bg-info">Shop</span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-md-between"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav mb-2 mb-lg-0 mt-md-0 mt-sm-3 mt-3">
                  <li class="nav-item">
                    <div class="separate"></div>
                    <a class="nav-link active" aria-current="page" href="/">
                      Kênh Người Bán
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="separate"></div>
                    <a class="nav-link" href="/">
                      Trở thành Người bán Shopee
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="separate"></div>
                    <a class="nav-link" href="/">
                      Tải ứng dụng
                      {/* <div className="header__qr">
                        <img src="img/qrcode.png" alt="QR code" className="header__qr-img" />
                        <div className="header__qr-apps">
                          <a href className="header__qr-link">
                            <img src="img/ggplay.png" alt="" className="header__qr-dowload-img" />
                          </a>
                          <a href className="header__qr-link">
                            <img src="img/appstore.png" alt="" className="header__qr-dowload-img" />
                          </a>
                        </div>
                      </div> */}
                    </a>
                  </li>
                  <li class="nav-item d-flex">
                    <a class="nav-link" href="/">
                      Kết nối
                    </a>
                    <a href="/" class="nav-link">
                      <i class="header__navbar-icon fab fa-facebook"></i>
                    </a>
                    <a href="/" class="nav-link">
                      <i class="header__navbar-icon fab fa-instagram"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      {" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      {" "}
                    </a>
                  </li>
                </ul>
                <hr class="text-white" />
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <i class="header__navbar-icon far fa-bell"></i>
                      Thông báo
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <i class="header__navbar-icon far fa-question-circle"></i>
                      Trợ giúp
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="separate"></div>
                    <a class="nav-link" href="/">
                      Đăng kí
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Đăng nhập
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div
            class="
          container-fluid
          header-with-search
          d-lg-block d-md-block
          collapse
        "
            id="navbarSupportedContent"
          >
            <div class="row">
              <div class="col-md-2">
                <a href="/" class="header-logo d-flex">
                  <i class="fab fa-shopify my-auto"></i>
                  <h2 class="header-logo-name mt-auto">Thien'Shop</h2>
                </a>
              </div>
              <div class="col-md-8 header-search my-auto">
                <form class="d-flex header-search-form position-relative">
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="header__search-btn-icon" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <div class="col-md-2 mt-auto">
                <i class="fas fa-cart-arrow-down"></i>
              </div>
            </div>
          </div>

          <div class="conatiner-fluid pb-2 d-lg-block d-md-block d-sm-none d-none">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8 header-footer">
                <ul class="nav">
                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Áo khoác
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Váy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Quần
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Túi xách nữ
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Dép
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Chân váy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Dép nữ
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Tai nghe
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>

        <div class="dem-1 d-md-block d-none d-sm-none" style={{ height: "110px" }}></div>
      </div>
    );
  }
}
