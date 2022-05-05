import Carousel from '@/common/carousel';
import PageHead from '@/common/pageHead';
import ContextList from '@/pages/content/center/components/contextList';
import { getAll, getAllAuditing } from '@/api/video';
import { useState, useEffect,useContext} from 'react';

const home = () => {
  const [listData, setListData] = useState(null);
  useEffect(() => {
    getAllAuditing(true).then((res) => {
      res = res.slice(0,8)
      res = res.sort((a,b)=> a.videoUid-b.videoUid)
      setListData(res);
    });
  }, []);

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

      <div style={{width:'80%',margin:'0 auto'}}>
      <PageHead
        navData={{
          title: '视频推荐',
        }}
        noShowBack={true}
      />
        <ContextList listData={listData}/>
      </div>

      {/* <ContextList listData={this.state.listData}/> */}
    </div>
  );
};

export default home;
