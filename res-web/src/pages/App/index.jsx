import React, { Component, Fragment } from 'react';
import Header from '../header';
import Footer from '../footer/index';
import Content from '../content/index';
import styles from '../index.less';
import '../../tools/rem.js';
import 'particles.js';
import '../../tools/particle.css';
import { particle } from '../../public/data';

export default class App extends Component {
  componentDidMount() {
    particlesJS('particles-js', {
      ...particle,
    });
  }

  render() {
    const { props } = this;
    return (
      <div>
        <section id="particles-js"></section>

        <div className={styles.main}>
          <Header />
          <Content>
            {/* todo:当主页为/时展示该首页的内容 */}
            <div>{props.children}</div>
          </Content>
          <Footer />
        </div>
      </div>
    );
  }
}
