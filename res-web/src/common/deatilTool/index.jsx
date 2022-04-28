import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import style from './index.less';
function detailTool(props) {
  const { url } = props;
  const handleClick = () => {
    let a = document.createElement("a");
    a.href = url;
    a.click();
  };
  return (
    <div>
      <Button
        type="defulat"
        shape="round"
        icon={<DownloadOutlined />}
        size={'large'}
        className={style.icon}
        onClick={() => handleClick()}
      >下载</Button>
    </div>
  );
}

export default detailTool;
