import React, { Component } from 'react'
import PageHead from '@/components/Common/PageHead';
export default class index extends Component<any>{
  state = { navData: this.props.location.state };
  render() {
    return (
      <div>
          <PageHead navData={this.state.navData} />
      </div>
    )
  }
}
