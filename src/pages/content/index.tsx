import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import TabBar from '../components/TabBar'
import './index.less'

export default class Index extends Component<any, any> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor (props) {
    super(props)
    this.state = {
      tabIndex: 1
    }
  }
  render() {
    return (
      <View className='index'>
        <AtButton type='primary'>按钮文案</AtButton>
        <Text>Hello world!ssss</Text>
        <TabBar tabIndex={this.state.tabIndex}></TabBar>
      </View>
    )
  }
}
