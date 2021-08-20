import { restInstance } from '../runner/rest'

export default class ProductAPI {
  getProductInfo = (productId) => {
    return restInstance('get', `/v1/products/productId/${productId}`).then(
      (response) => response.data
    )
  }
}
