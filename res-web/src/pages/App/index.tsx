import React, { Component, Fragment } from 'react';
import Header from '../header/Index';
import Footer from '../footer/index';
import Content from '../content/index';
import styles from '../index.less';
import '../../tools/rem.js'

export default class App extends Component {
  render() {
    const {props} = this
    return (
      <div className={styles.main}>
        <Header />
          <Content>
            {/* todo:当主页为/时展示该首页的内容 */}
            <div>{ props.children }</div>
          </Content>
        <Footer />
      </div>
    );
  }
}
