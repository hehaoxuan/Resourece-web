// 用来展示不同的组件
import React, { Component } from 'react';
import ContentItem from '@/pages/content/center/components/contextList/ContentItem';
import style from './index.less';
import { Link } from 'umi';
import { withRouter } from 'umi';

export default withRouter(({ history, location, match }) => {
  // 接收id 生成不同的数据
  const videoObj = [{
    id:12345, //视频id
    url:'xxxx.xxxx', //视频url
    type:'video', //数据类型
    backgroundUrl:'xxxx.xxxx', //封面
    title:'1111',//标题
    time:'xxx-xxxx-xxxx',//上传时间
    playTime:0,//播放次数
    marks:0,//标记次数
    author:'admin'//作者信息
  }];
  const handleDetail = () => {
    history.push('/video/12345');
  };
  return (
    <div className={style.list}>
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
      <ContentItem
        onClick={() => {
          handleDetail();
        }}
      />
    </div>
  );
});
