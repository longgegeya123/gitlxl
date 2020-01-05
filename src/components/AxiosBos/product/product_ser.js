import Http from "../utlit/http";
const _http = new Http();
class Product {
  shopImg() {
    return _http.request({
      type: "post",
      url: "/shop/goods/list?page&pageSize"
    });
  }
}
export default Product;
