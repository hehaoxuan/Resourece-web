import React, { Component } from 'react'
import PageHead from '@/common/pageHead/pageHead';
export default class index extends Component<any>{
  state = { navData: this.props.location.state };
  render() {
    return (
      <div>
          <PageHead navData={{ title: '搜索', subTitle: '搜索资源' }} />
      </div>
    )
  }
}
