import PageHead from "@/common/pageHead";
import Recommon from "@/common/recommon";
import Video from '@/common/Video'
import DetailText from '@/common/DetailText'
import DetailTool from "@/common/deatilTool";

const videoDtail = () => {
  return (
    <div>
      <PageHead  navData={{ title: '闪电六连鞭', subTitle: '' }}/>
      <Video/>
      <DetailText/>
      <DetailTool/>
      {/* <Recommon/> */}
    </div>
  );
};

export default videoDtail;
