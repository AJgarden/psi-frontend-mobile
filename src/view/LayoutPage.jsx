import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConfigProvider, Layout, Button, message, BackTop } from 'antd'
import zhTW from 'antd/lib/locale/zh_TW'
import moment from 'moment'
import 'moment/locale/zh-tw'
import { createHashHistory } from 'history'
import { HeaderLogoutIcon, HeaderAccountIcon } from './icon/Icon'
import { Login } from './Login'
import { Mainpage } from './page/Mainpage'
import Product from './page/product/Product'
import StaticStorage from '../model/storage/static'
import GlobalAPI from '../model/api/global'
import { testRestInstance } from '../model/runner/rest'

moment.locale('zh-tw')

export default class LayoutPage extends React.Component {
  staticStorage = new StaticStorage()
  globalAPI = new GlobalAPI()
  history = createHashHistory()

  constructor(props) {
    super(props)
    const cookies = document.cookie.split(';')
    this.state = {
      isLand: !cookies.find((cookie) => cookie.includes('MOTOBUY_MOBILE_AUTH')),
      isAuth: false
    }
  }

  componentDidMount() {
    window.logout = this.onLogout
    // window.addEventListener('beforeunload', this.clearCookie)
    const cookies = document.cookie.split(';')
    if (cookies.find((cookie) => cookie.includes('MOTOBUY_MOBILE_AUTH'))) {
      testRestInstance('get', '/v1/auth')
        .then((response) => {
          if (response.data.code === 0) {
            this.getGlobalData().then(() => {
              this.setState({ isLand: true, isAuth: true })
            })
          } else {
            this.setState({ isLand: true })
          }
        })
        .catch(() => this.setState({ isLand: true }))
    }
  }

  getGlobalData = async () => {
    await new Promise((resolve) => {
      this.globalAPI.getUnitList().then((response) => {
        this.staticStorage.setUnitList(response.data)
        resolve(true)
      })
    })
  }

  clearCookie = () => {
    const cookies = document.cookie.split(';')
    if (
      !(
        cookies.find((cookie) => cookie.includes('MOTOBUY_MOBILE_KEEP_LOGIN')) &&
        cookies.find((cookie) => cookie.includes('MOTOBUY_MOBILE_KEEP_LOGIN')).split('=')[1] ===
          'true'
      )
    ) {
      document.cookie = 'MOTOBUY_MOBILE_AUTH=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      localStorage.removeItem('MOTOBUY_MOBILE_USERNAME')
      localStorage.removeItem('MOTOBUY_MOBILE_ROLES')
    }
  }

  onLogin = () => {
    this.getGlobalData().then(() => this.setState({ isAuth: true }))
  }
  onLogout = (self = false) => {
    if (self) {
      message.success('已成功登出')
    } else {
      message.error('授權已過期，請重新登入')
    }
    document.cookie = 'MOTOBUY_MOBILE_AUTH=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    localStorage.removeItem('MOTOBUY_MOBILE_USERNAME')
    localStorage.removeItem('MOTOBUY_MOBILE_ROLES')
    this.history.replace('/')
    this.setState({ isAuth: false })
  }

  render() {
    return this.state.isLand ? (
      this.state.isAuth ? (
        <ConfigProvider locale={zhTW}>
          <Layout className='layout-wrapper'>
            <Layout.Header className='layout-header'>
              <div className='layout-header-name'>
                <div className='layout-header-name-avatar'>
                  <HeaderAccountIcon />
                </div>
                <div>{localStorage.getItem('MOTOBUY_MOBILE_USERNAME')}</div>
              </div>
              <div className='layout-header-logout'>
                <Button onClick={this.onLogout}>
                  <HeaderLogoutIcon />
                </Button>
              </div>
            </Layout.Header>
            <Layout.Content className='layout-content'>
              <Switch>
                <Route path='/Product' exact={true} component={Product} />
                <Route path='/' component={Mainpage} />
              </Switch>
            </Layout.Content>
            <Layout.Footer className='layout-footer'>2021 &copy; Copyright</Layout.Footer>
          </Layout>
        </ConfigProvider>
      ) : (
        <ConfigProvider locale={zhTW}>
          <Login onLogin={this.onLogin} />
        </ConfigProvider>
      )
    ) : null
  }
}
