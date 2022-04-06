// 用来展示不同的组件
import React, { Component } from 'react';
import ContentItem from '@/pages/content/center/components/contextList/ContentItem';
import style from './index.less';
import { Link } from 'umi';
import { withRouter } from 'umi';
import { useEffect, useState } from 'react';
import { getAll } from '@/api/video';

export default withRouter(({ history, location, match }) => {
  // 接收id 生成不同的数据
  const handleDetail = (params) => {
    history.push(`/video/${params}`);
  };

  const [itemList, setItem] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      setItem(res);
    });
  }, []);

  console.log(itemList);

  return (
    <div className={style.list}>
      {itemList.map((item) => (
        <ContentItem
          key={item._id}
          title={item.title}
          description={item.describe}
          onClick={() => 
            handleDetail(item.videoUid)
          }
        />
      ))}
    </div>
  );
});
