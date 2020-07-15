import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtForm, AtInput, AtButton } from 'taro-ui'
// import TabBar from '../components/TabBar'
import './index.less'

export default class Login extends Component<any, any> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor(props) {
    super(props)
    this.state = {
      tabIndex: 2,
      current: 0
    }
  }
  render() {
    const tabList = [{ title: '登录' }, { title: '注册' }]
    return (
      <View className='login'>
        <View className='login_signup'>
          <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={this.state.current} index={0} >
              <AtForm
                onSubmit={this.onSubmit.bind(this)}
                onReset={this.onReset.bind(this)}
              >
                <AtInput
                  name='value'
                  type='text'
                  placeholder='账号'
                  value={this.state.value}
                  onChange={this.handleChange.bind(this, 'value')}
                />
                <AtInput
                  name='value'
                  type='text'
                  placeholder='密码'
                  value={this.state.value}
                  onChange={this.handleChange.bind(this, 'value')}
                />
                <AtButton formType='submit'>提交</AtButton>
              </AtForm>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View>标签页二的内容</View>
            </AtTabsPane>
          </AtTabs>
        </View>
        {/* <View className='login_bg_img'></View> */}
      </View>
    )
  }
  handleClick(index) {
    this.setState({
      current: index
    })
  }
  handleChange(data) {
    console.log(data)
  }
  onSubmit(data) {
  }
  onReset(data) {
  }
}
