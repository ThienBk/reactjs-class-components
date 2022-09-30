import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <>
        <div class="container-fluid banner mt-md-0 mt-sm-5 mt-5">
          <div class="row">
            <div class="col-md-8">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="./img/banner-img-left.png" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="./img/banner-img-left1.png" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="./img/banner-img-left2.png" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="./img/banner-img-left3.png" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="./img/banner-img-left4.png" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-4 banner-img-right mt-md-0 mt-sm-1 mt-1">
              <img src="./img/banner-img-right1.png" class="d-block w-100" alt="" />
              <img
                src="./img/banner-img-right1.png"
                class="d-block w-100 banner-img-right-2"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <!-- Banner 2 --> */}
        <img class="banner-2 w-100" src="img/banner2.png" alt=""></img>
      </>
    );
  }
}
