import React, { Component,Fragment} from 'react'
import { Input} from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

export default class SearchItem extends Component {
  onSearch = ()=>{
    
  }
  render() {
    return (
      <Fragment>
        <Search placeholder="搜索" allowClear onSearch={this.onSearch} style={{ width: 200 }} />
      </Fragment>
    )
  }
}
