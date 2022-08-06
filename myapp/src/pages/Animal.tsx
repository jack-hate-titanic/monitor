/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-11 21:05:03
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-11 21:09:08
 * @FilePath: /frontDemo/myapp/src/pages/Animal.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';

export default class Animal extends React.Component{

  state = { name: 111 };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 222
      })
    },2000)
    
  }

  render() {
    return <div>{ this.state.name}</div>
  }
}