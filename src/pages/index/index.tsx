import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'
import TabBar from '../components/TabBar'
import './index.less'

export default class Index extends Component<any, any> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor(props) {
    super(props)
    this.state = {
      tabIndex: 0
    }
  }
  render() {
    return (
      <View className='index'>
        <AtNoticebar icon='volume-plus' close marquee>
          欢迎来到我的网站
        </AtNoticebar>
        {/* <div className="fa fa-file">sssssss</div> */}
        {/* <Text>indexsss</Text> */}
        <TabBar tabIndex={this.state.tabIndex}></TabBar>
      </View>
    )
  }
  handleClick(index) {
    this.setState({
      current: index
    })
  }
}
