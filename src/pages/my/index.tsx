import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
// import { AtButton, AtTabBar } from 'taro-ui'
import TabBar from '../components/TabBar'
import Login from '../login/index'
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
      tabIndex: 2
    }
  }
  render() {
    return (
      <View className='my'>
        {/* <Text>my</Text> */}
        <Login></Login>
        <TabBar tabIndex={this.state.tabIndex}></TabBar>
      </View>
    )
  }
  handleClick(index){
    this.setState({
      current: index
    })
  }
}
