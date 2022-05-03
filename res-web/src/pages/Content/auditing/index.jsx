import React, { Component, Fragment } from 'react';
import PageHead from '@/common/pageHead';
import ContextList from '@/pages/content/center/components/contextList';
import { getAll,getAllAuditing } from '@/api/video';
import { useState, useEffect } from 'react';

export default function index() {
  const [listData, setListData] = useState(null);
  useEffect(() => {
    getAllAuditing(false).then((res) => {
      setListData(res);
    });
  }, []);
  return (
    <Fragment>
      <PageHead navData={{ title: '审核', subTitle: '管理员在此审核视频' }} />
      {/* 内容中心 */}
      <ContextList listData={listData} />
    </Fragment>
  );
}
