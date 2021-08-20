import React from 'react'
import { Row, Col, Button } from 'antd'
import { createHashHistory } from 'history'
import { MainDeliveryIcon, MainReceiveIcon, MainSaleIcon, MainProductIcon } from '../icon/Icon'

export const Mainpage = (props) => {
  const history = createHashHistory()

  const jumpPage = (path) => history.push(path)

  return (
    <div className='mainpage-wrapper'>
      <Row gutter={[24, 20]}>
        <Col span={12}>
          <Button disabled={true} onClick={() => jumpPage('/Delivery')}>
            <MainDeliveryIcon />出貨登記
          </Button>
        </Col>
        <Col span={12}>
          <Button disabled={true} onClick={() => jumpPage('/Receive')}>
            <MainReceiveIcon />銷貨簽收
          </Button>
        </Col>
        <Col span={12}>
          <Button disabled={true} onClick={() => jumpPage('/Sale')}>
            <MainSaleIcon />銷貨單明細
          </Button>
        </Col>
        <Col span={12}>
          <Button onClick={() => jumpPage('/Product')}><MainProductIcon />商品資訊</Button>
        </Col>
      </Row>
    </div>
  )
}
