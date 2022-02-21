import React, { Component } from 'react';
import ContentItem from '@/components/ContextList/ContentItem/index';
import style from './index.less'
export default class index extends Component {
  render() {
    return (
      <div className={style.list}>
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </div>
    );
  }
}
