import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import style from './index.less';
function detailTool(props) {
  return (
    <div >
      <Button
        type="defulat"
        shape="round"
        icon={<DownloadOutlined />}
        size={'large'}
        className={style.icon}
      />
    </div>
  );
}

export default detailTool;
