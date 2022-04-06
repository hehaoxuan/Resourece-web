// 用来展示内容列表
import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import style from './index.less';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
const { Meta } = Card;

export default function index(props) {
  console.log(props);
  const {title,description,onClick} = props
  return (
    <div className={style.item} >
      <Card
        className={style.card}
        onClick = {onClick}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        // 这里对应管理员的权限
        //   actions={[
        //     <SettingOutlined key="setting" />,
        //     <EditOutlined key="edit" />,
        //     <EllipsisOutlined key="ellipsis" />,
        //   ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={title}
          description={description}
        />
      </Card>
    </div>
  );
}
