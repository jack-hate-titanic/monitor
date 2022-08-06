/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-05 09:57:14
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-02 11:10:12
 * @FilePath: /frontDemo/myapp/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react';
import  Animal  from './Animal';
import styles from './index.less';


export default class IndexPage extends React.Component{

  state = { name: 111 };

  componentDidMount() {
    console.log(this.state.name);
    
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>{ this.state.name}</h1>
        <Animal/>
      </div>
    );
  }
  
}
