import React, { Component } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
import style from './UploadDrag.less'

export default class UploadDrag extends Component {
  static defualtProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} 文件成功上传.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件失败上传`);
      }
    },
  };

  onDrop =(e:any) => {
    console.log('Dropped files', e.dataTransfer.files);
  }

  render() {
    const { props } = this;
    return (
      <Dragger {...props} className={style.dragger}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽上传文件</p>
        <p className="ant-upload-hint">支持单个文件或者批量上传</p>
      </Dragger>
    );
  }
}
