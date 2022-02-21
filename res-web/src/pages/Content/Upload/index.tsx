// @ts-nocheck
import React, { Component,Fragment } from 'react'
import UploadDrag from '@/pages/Content/Upload/components/UploadDrag'
import UploadForm from '@/pages/Content/Upload/components/UploadForm'
import style from '@/pages/Content/Upload/index.less'
import PageHead from '@/components/Common/PageHead';

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
