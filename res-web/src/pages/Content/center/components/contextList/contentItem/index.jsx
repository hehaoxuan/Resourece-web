// 用来展示内容列表
import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import style from './index.less';
import {computeCover} from '@/api/video.js'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
const { Meta } = Card;
export default function index(props) {
  console.log(props);
  const {title,description,onClick,uid,key} = props
  return (
    <div className={style.item} key={key}>
      <Card
        className={style.card}
        onClick = {onClick}
        cover={
          <img
            alt="example"
            className={style.img}
            src={computeCover(uid)}
          />
        }
        // 这里对应管理员的权限
          // actions={[
          //   <SettingOutlined key="setting" />,
          //   <EditOutlined key="edit" />,
          //   <EllipsisOutlined key="ellipsis" />,
          // ]}
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
