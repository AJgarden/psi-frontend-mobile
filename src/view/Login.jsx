import React, { useState, useEffect } from 'react'
import { createHashHistory } from 'history'
import { Buffer } from 'buffer'
import { Input, Checkbox, Button, message } from 'antd'
import {
  LoginAccountIcon,
  LoginPasswordIcon,
  LoginPasswordOnIcon,
  LoginPasswordOffIcon
} from './icon/Icon'
import { restInstanceWithoutAuth } from '../model/runner/rest'

export const Login = (props) => {
  const cookies = document.cookie.split(';')
  let keepLogin =
    cookies.find((cookie) => cookie.includes('MOTOBUY_MOBILE_KEEP_LOGIN')) &&
    cookies.find((cookie) => cookie.includes('MOTOBUY_MOBILE_KEEP_LOGIN')).split('=')[1] === 'true'
  const [isLogin, setIsLogin] = useState(false)
  const [loginData, setLoginData] = useState({
    userId: '',
    password: ''
  })

  useEffect(() => {
    document.title = '登入 - MOTOBUY PSI'
    const history = createHashHistory()
    history.replace('/')
  }, [loginData])

  const onInputChange = (key, e) => {
    loginData[key] = e.target.value
    setLoginData(loginData)
  }

  const onLogin = () => {
    setIsLogin(true)
    if (keepLogin) {
      document.cookie = `MOTOBUY_MOBILE_KEEP_LOGIN=${keepLogin}; path=/; max-age=86400`
    } else {
      document.cookie = 'MOTOBUY_MOBILE_KEEP_LOGIN=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
    restInstanceWithoutAuth('post', '/v1/author/login', loginData)
      .then((response) => {
        const data = response.data
        if (data.code === 0) {
          message.success('登入成功')
          // save auth cookie
          const auth = new Buffer(`${loginData.userId}:${loginData.password}`).toString('base64')
          if (keepLogin) {
            document.cookie = `MOTOBUY_MOBILE_AUTH=${auth}; path=/; max-age=86400`
          } else {
            document.cookie = `MOTOBUY_MOBILE_AUTH=${auth}; path=/`
          }
          // save username
          localStorage.setItem('MOTOBUY_MOBILE_USERNAME', data.data.username)
          // save permission roles
          localStorage.setItem(
            'MOTOBUY_MOBILE_ROLES',
            JSON.stringify(data.data.authorities.map((role) => role.authority))
          )
          setTimeout(() => props.onLogin(), 200)
        } else {
          message.error('登入失敗')
          setIsLogin(false)
        }
      })
      .catch((error) => {
        message.error('登入失敗')
        setIsLogin(false)
      })
  }

  return (
    <div className='login-wrapper'>
      <div className='login-board'>
        <div className='login-board-header'>
          <div className='login-board-logo'>M</div>
          <h1 className='login-board-title'>MOTOBUY PSI</h1>
        </div>
        <div className='login-board-form'>
          <Input
            placeholder='User ID'
            prefix={<LoginAccountIcon />}
            onChange={(e) => onInputChange('userId', e)}
          />
          <Input.Password
            placeholder='Password'
            prefix={<LoginPasswordIcon />}
            iconRender={(visible) => (visible ? <LoginPasswordOnIcon /> : <LoginPasswordOffIcon />)}
            onChange={(e) => onInputChange('password', e)}
          />
          <Checkbox defaultChecked={keepLogin} onChange={(e) => (keepLogin = e.target.checked)}>
            Keep me logged.
          </Checkbox>
        </div>
        <div className='login-board-footer'>
          <Button onClick={onLogin} loading={isLogin}>
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  )
}
