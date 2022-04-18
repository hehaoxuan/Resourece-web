import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined,MailOutlined,RollbackOutlined,FieldBinaryOutlined} from '@ant-design/icons';
import style from './index.less'
function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className={style.loginform}
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入账号' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="账号"
        />
      </Form.Item>
      <Form.Item
        name="密码"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item
        name="确认密码"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input
          prefix={<RollbackOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="确认密码"
        />
      </Form.Item>

      <Form.Item
        name="确认密码"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="邮箱"
        />
      </Form.Item>

      <Form.Item
        name="确认密码"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input
          prefix={<FieldBinaryOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="验证码"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
}


export default Login;
