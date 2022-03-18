// @ts-nocheck
import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
const { TextArea } = Input;
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img: any, callback: Function) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default class UploadForm extends Component {
  state = {
    loading: false,
  };

  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: any) =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <div>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 6 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="选择素材类型">
            <Select>
              <Select.Option value="video">视频素材</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="上传封面">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>

          <Form.Item label="标题">
            <Input />
          </Form.Item>
          <Form.Item label="素材描述">
            <TextArea rows={4} placeholder="输入对该素材的描述" maxLength={6} />
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              确认上传
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
