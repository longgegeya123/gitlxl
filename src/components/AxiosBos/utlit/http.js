import config from "../config/index";
import Axios from "axios";
import Qs from "qs";

class HTTP {
  request(params) {
    return new Promise(resolve => {
      Axios({
        method: params.type || "get",
        url: config.baseUrl + params.url,
        data: Qs.stringify(params.data)
      }).then(res => {
        resolve(res);
        // eslint-disable-next-line no-console
        console.log(res);
      });
    });
  }
}
export default HTTP;
