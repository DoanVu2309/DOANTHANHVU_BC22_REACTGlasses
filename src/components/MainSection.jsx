// File chính của bài tập
import React, { Component } from "react";

import GlassesList from "./GlassesList";
import ActiveGlasses from "./ActiveGlasses";

// Danh sách kính
const glassesList = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./../img/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./../img/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./../img/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./../img/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./../img/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./../img/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./../img/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./../img/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./../img/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export class MainSection extends Component {
  state = {
    activeGlasses: glassesList[0],
  };
  // setState để thay đổi kính
  handleChangeGlasses = (id) => {
    this.setState({
      activeGlasses: glassesList.find((glasses) => glasses.id === id),
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="container row">
        
          <section className="model d-flex justify-content-center col-6">
            <div
              className="card text-left"
              style={{ width: 250, position: "relative" }}
            >
              <img
                className="card-img-top"
                src="./../img/glassesImage/model.jpg"
                alt="hinh model"
              />

              <ActiveGlasses activeGlassesUrl={this.state.activeGlasses.url} />

              <div className="card-body">
                <span className="card-title badge-danger h3 px-2 rounded">
                  ${this.state.activeGlasses.price}
                </span>
                <p className="card-text mt-2">
                  {this.state.activeGlasses.name}
                </p>
              </div>
              
            </div>
          </section>
          <section className="model d-flex justify-content-center col-6">
            <div
              className="card text-left"
              style={{ width: 250, position: "relative" }}
            >
              <img
                className="card-img-top"
                src="./../img/glassesImage/model.jpg"
                alt="hinh model"
              />

              <ActiveGlasses activeGlassesUrl={this.state.activeGlasses.url} />

              <div className="card-body">
                <p className="card-text">
                  {this.state.activeGlasses.desc}
                </p>
              </div>
              
            </div>
          </section>
            <GlassesList
            glassesList={glassesList}
            handleChangeGlasses={this.handleChangeGlasses}
          />
        </div>
      </div>
    );
  }
}

export default MainSection;
