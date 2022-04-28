import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default class index extends Component {
  render() {
    return (
        <Footer style={{ textAlign: 'center' }}>
         基于树莓派的视频资源收集、管理、展示系统 ©2022 Created by hehaoxuan
      </Footer>
    )
  }
}
