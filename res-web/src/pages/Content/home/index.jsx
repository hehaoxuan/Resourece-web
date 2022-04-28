import Carousel from '@/common/carousel';
import PageHead from '@/common/pageHead';

const home = () => {
  return (
    <div>
      <PageHead
        navData={{
          title: '视频主页',
          subTitle: '基于树莓派的视频资源收集、管理、展示系统',
        }}
        noShowBack={true}
      />
      <Carousel />
    </div>
  );
};

export default home;
