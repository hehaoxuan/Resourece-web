import React, { Component, Fragment } from 'react';
import { PageHeader, Breadcrumb } from 'antd';
import { withRouter,useHistory } from 'umi';


export default withRouter((props) => {
  const {title,subTitle} = props.navData
  const history = useHistory();
  console.log(props);
  const goback = ()=>{
    history.goBack()
  }
  
  return (
      <Fragment>
        <PageHeader
          className="site-page-header"
          onBack={() => goback()}
          title={title}
          subTitle={subTitle}
        />
      </Fragment>
  );
});
      // <Fragment>
      //   <PageHeader
      //     className="site-page-header"
      //     onBack={() => null}
      //     title={navData.title}
      //     subTitle={navData.subTitle}
      //   />
      // </Fragment>