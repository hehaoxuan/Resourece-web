import React, { Component, Fragment } from 'react';
import ContextList from '@/pages/content/center/components/contextList';
import PageHead from '@/common/pageHead'
export default class index extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <PageHead navData={{ title: '素材中心', subTitle: '当下最热门的素材' }} />
        {/* 内容中心 */}
        <ContextList />
      </Fragment>
    );
  }
}
