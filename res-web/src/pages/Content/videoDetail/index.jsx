import PageHead from '@/common/pageHead';
import Recommon from '@/common/recommon';
import Video from '@/common/Video';
import DetailText from '@/common/DetailText';
import DetailTool from '@/common/deatilTool';
import { useState } from 'react';
import { useHistory } from 'umi';
import { useEffect } from 'react';
import {computeVideo,getVideoDeatil} from '@/api/video'

const videoDtail = () => {
  const [url, setUrl] = useState('');
  const [pageHeadData, setPageHeadData] = useState('');
  const [detailData, setDetailData] = useState('');
  const history = useHistory();
  const uid = history.location.pathname.replace(/[^0-9]+/, '')
  useEffect(() => {
    setUrl(computeVideo(uid));
    getVideoDeatil(uid).then((res)=>{
      setPageHeadData({
        title:res[0].title
      })
      setDetailData({
        article:res[0].describe
      })
    })
  }, []);

  return (
    <div>
      <PageHead navData={{...pageHeadData}} />
      {/* 传入uid 给视频组件 */}
      <Video url={url}/>
      <DetailText {...detailData}/>
      <DetailTool />
      {/* <Recommon/> */}
    </div>
  );
};

export default videoDtail;
