// 用来展示不同的组件
import React, { Component } from 'react';
import ContentItem from '@/pages/content/center/components/contextList/ContentItem';
import style from './index.less';
import { Link } from 'umi';
import { withRouter } from 'umi';
import { useEffect, useState } from 'react';


export default withRouter(({ history, location, match,listData}) => {
  // 接收id 生成不同的数据
  const handleDetail = (params) => {
    history.push({ pathname: `/video/${params}`, params: params });
  };

  const [itemList, setItem] = useState([]);

  useEffect(() => { 
    setItem(listData);
    console.log(listData);
  }, [listData]);

  return (
    <div className={style.list}>
      {itemList&&itemList.map((item) => (
        <ContentItem
          key={item._id}
          title={item.title}
          description={item.describe}
          uid = {item.videoUid}
          onClick={() => handleDetail(item.videoUid)}
        />
      ))}
    </div>
  );
});
