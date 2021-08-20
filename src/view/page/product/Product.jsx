import React from 'react'
import { Input, Button } from 'antd'
import moment from 'moment'
import QrReader from 'react-qr-scanner'
import { MainProductIcon } from '../../icon/Icon'
import ProductAPI from '../../../model/api/product'

export default class Product extends React.Component {
  productApi = new ProductAPI()
  searchTime = 0
  html5QrcodeScanner = null

  constructor(props) {
    super(props)
    this.state = {
      productId: '',
      getInfo: false,
      info: {},
      isScan: false,
      data: null
    }
  }

  onScan = (data) => {
    this.setState({ data })
  }
  onError = (data) => {
    this.setState({ data })
  }

  onSearch = (event) => {
    this.searchTime = moment().valueOf()
    this.setState({ productId: event.target.value }, () => {
      setTimeout(() => {
        if (moment().valueOf() - this.searchTime >= 500) {
          this.productApi
            .getProductInfo(this.state.productId)
            .then((response) => {
              if (response.code === 0) {
                this.setState({ getInfo: true, info: response.data })
              } else {
                this.setState({ getInfo: false, info: {} })
              }
            })
            .catch(() => {
              this.setState({ getInfo: false, info: {} })
            })
        }
      }, 500)
    })
  }
  onSearchByScan = () => {
    this.productApi
      .getProductInfo(this.state.productId)
      .then((response) => {
        if (response.code === 0) {
          this.setState({ getInfo: true, info: response.data })
        } else {
          this.setState({ getInfo: false, info: {} })
        }
      })
      .catch(() => {
        this.setState({ getInfo: false, info: {} })
      })
  }

  render() {
    return (
      <div className='product-wrapper'>
        <div className='product-search'>
          <Input
            value={this.state.productId}
            placeholder='輸入商品編號或掃描QR code'
            onChange={this.onSearch}
          />
          <Button type='primary' onClick={this.getQRCode}>
            <MainProductIcon />
          </Button>
        </div>
        <QrReader delay={500} onScan={this.onScan} onError={this.onError} />
        {this.state.data}
      </div>
    )
  }
}
