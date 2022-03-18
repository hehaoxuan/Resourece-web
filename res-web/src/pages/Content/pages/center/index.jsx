import React, { Component, Fragment } from 'react';
import ContextList from '@/common/contextList/index';
import PageHead from '@/common/pageHead/pageHead'
export default class index extends Component {
  state = { navData: this.props.location.state };

  render() {
    return (
      <Fragment>
        <PageHead navData={this.state.navData} />
        <ContextList />
      </Fragment>
    );
  }
}
