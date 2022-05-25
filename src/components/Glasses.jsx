// File sản phẩm kính
import React, { Component } from "react";

export class Glasses extends Component {
  render() {
    // bóc tách giá trị
    // glasses.url để chỏ tới link hình
    let { glasses, handleChangeGlasses } = this.props;
    return (
      <div className="col-2">
        <button
          className="btn btn-outline-secondary mt-3 mb-2"
          onClick={() => handleChangeGlasses(glasses.id)}
        >
          <img
            src={glasses.url}
            alt="hinh"
            style={{ width: 100, borderRadius: 20 }}
          />
        </button>
      </div>
    );
  }
}

export default Glasses;
