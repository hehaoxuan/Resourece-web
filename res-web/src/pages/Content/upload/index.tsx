// @ts-nocheck
import React, { Component,Fragment } from 'react'
import UploadDrag from '@/pages/content/upload/components/UploadDrag'
import UploadForm from '@/pages/content/upload/components/UploadForm'
import style from '@/pages/content/upload/index.less'
import PageHead from '@/common/pageHead/pageHead';

export default class index extends Component {
  state = {navData:this.props.location.state}
  render() {
    return (
      <Fragment>
        <PageHead navData={{ title: '上传', subTitle: '从这里上传素材' }}/>
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
