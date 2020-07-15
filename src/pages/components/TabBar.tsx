import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtTabBar } from 'taro-ui'
import './TabBar.less'
import Taro from '@tarojs/taro'

export default class TabBar extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      current: props.tabIndex
    }
  }
  render () {
    return (
      <View className='tab_bar'>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'bullet-list' },
            { title: '内容', iconType: 'link' },
            { title: '我的', iconType: 'home' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
  handleClick (index) {
    this.setState({
      current: index
    })
    switch (index) {
      case 0:
        Taro.redirectTo({
          url: `/pages/index/index`
        })
        break;
      case 1:
        Taro.redirectTo({
          url: `/pages/content/index`
        })
        break;
      case 2:
        Taro.redirectTo({
          url: `/pages/my/index`
        })
        break;
      default:
        break;
    }
  }
}