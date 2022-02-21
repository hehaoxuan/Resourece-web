import React, { Component, Fragment } from 'react';
import { Layout} from 'antd';


const { Header } = Layout;
import Search from '@/pages/Header/components/SearchSide';
import HeadMenu from '@/pages/Header/components/headMenu';
import style from './index.less';

export default class index extends Component {
  render() {

    return (
      <Fragment>
        <Header style={{ background: '#ffffff' }}>
          <HeadMenu/>
        </Header>
        <div className={style.Search}>
          <Search />
        </div>
      </Fragment>
    );
  }
}
