import { Carousel } from 'antd';
import style from './index.less'
const contentStyle = {
  height: '6rem',
  color: '#fff',
  lineHeight: '6rem',
  textAlign: 'center',
  background: '#364d79',
};

export default () => (
  <div className={style.carousel}>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </div>
);
