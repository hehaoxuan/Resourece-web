// 用来展示不同的组件
import React, { Component } from 'react';
import ContentItem from '@/pages/content/center/components/contextList/ContentItem';
import style from './index.less';
import { Link } from 'umi';
import { withRouter } from 'umi';
import { useEffect, useState } from 'react';
import { Row, Col, Slider } from 'antd';
import Empty from '@/common/noData';

export default withRouter(({ history, location, match, listData }) => {
  // 接收id 生成不同的数据
  const handleDetail = (params) => {
    history.push({ pathname: `/video/${params}`, params: params });
  };
  const [itemList, setItem] = useState([]);
  let list;
  if (listData&&listData.length>=1) {
    list = (
      <Row gutter={[16, 24]}>
        {itemList &&
          itemList.map((item) => (
            <Col span={6}>
              {' '}
              <ContentItem
                key={item._id}
                title={item.title}
                description={item.describe}
                uid={item.videoUid}
                onClick={() => handleDetail(item.videoUid)}
              />
            </Col>
          ))}
      </Row>
    );
  } else {
    list = <Empty />
  }

  useEffect(() => {
    setItem(listData);
    console.log(listData);
  }, [listData]);

  return (
    <div className={style.list}>
      {list}
    </div>
  );
});
