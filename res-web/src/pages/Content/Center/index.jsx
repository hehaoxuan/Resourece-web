import React, { Component, Fragment } from 'react';
import ContextList from '@/components/ContextList/index';
import PageHead from '@/components/Common/PageHead';

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
