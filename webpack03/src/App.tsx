/*
 * @Author: your name
 * @Date: 2021-11-05 17:54:29
 * @LastEditTime: 2021-12-12 17:47:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/desc.js
 */

import React, { PureComponent } from "react";
import { connect } from "react-redux";

interface Props {
  count: Number;
  dispatch: any;
}

class App extends PureComponent<Props> {
  addNumber = () => {
    this.props.dispatch({
      type: "addCount",
      payload: 5,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addNumber}>+</button>
        <span>{this.props.count}</span>
        <button>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    count: state.count.count,
  };
};

export default connect(mapStateToProps)(App);
