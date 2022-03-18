import React, { Component } from 'react';
import PageHead from '@/common/pageHead/pageHead';

export default class index extends Component<any> {
  state = {};
  render() {
    return (
      <div>
        <PageHead navData={{ title: '关于', subTitle: '关于本网站' }} />
      </div>
    );
  }
}
