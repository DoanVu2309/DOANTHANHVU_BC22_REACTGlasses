// File danh sách kính
import React, { Component } from "react";

import Glasses from "./Glasses";

export class GlassesList extends Component {
  render() {
    // bóc tách giá trị
    const { glassesList, handleChangeGlasses } = this.props;
    // glassesList.map để tìm key value và chỉ mục của kính trong danh sách kính
    return (
      <section className="glasses__list mt-3 d-flex justify-content-start flex-wrap col-12 bg-light">
        {glassesList.map((glasses, index) => {
          return (
            <Glasses
              key={index}
              glasses={glasses}
              handleChangeGlasses={handleChangeGlasses}
            />
          );
        })}
        ;
      </section>
    );
  }
}

export default GlassesList;
