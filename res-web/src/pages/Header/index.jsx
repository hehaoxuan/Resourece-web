import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;
import Search from '@/pages/header/components/SearchSide';
import HeadMenu from '@/pages/header/components/headMenu';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import style from './index.less';
import { Button } from 'antd';
import { withRouter } from 'umi';

export default withRouter(
  class index extends Component {
    handleLogin = () => {
      const { history } = this.props;
      history.push('/login');
    };
    handleRegister = () => {
      const { history } = this.props;
      history.push('/register');
    };
    render() {
      return (
        <Fragment>
          <Header style={{ background: '#ffffff' }}>
            <HeadMenu />
          </Header>
          <div className={style.Search}>
            <Search />
            <Button
              type="primary"
              className={style.Login}
              onClick={() => {
                this.handleLogin();
              }}
            >
              登陆
            </Button>
            <Button
              onClick={() => {
                this.handleRegister();
              }}
            >
              注册
            </Button>
            {/* <Button type="primary" shape="circle" icon={<UserOutlined /> } className={style.ICon}/> */}
          </div>
        </Fragment>
      );
    }
  },
);
