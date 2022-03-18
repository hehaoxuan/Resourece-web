// @ts-nocheck
import React, { Component,Fragment } from 'react'
import UploadDrag from '@/pages/content/pages/upload/components/UploadDrag'
import UploadForm from '@/pages/content/pages/upload/components/UploadForm'
import style from '@/pages/content/pages/upload/index.less'
import PageHead from '@/common/pageHead/pageHead';

export default class index extends Component {
  state = {navData:this.props.location.state}
  render() {
    return (
      <Fragment>
        <PageHead navData={this.state.navData}/>
      <div className={style.UploadDrag}>
        <UploadDrag/>
      </div>
      <div className={style.UploadForm}>
        <UploadForm/>
      </div>
      </Fragment>
    )
  }
}
