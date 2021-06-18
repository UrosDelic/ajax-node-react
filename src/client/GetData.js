import httpRequest from "./HttpRequest.js";

export class GetData {
  async getData() {
    try {
      const response = await httpRequest.get("http://localhost:8080/get-data");
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
  async postData(data) {
    try {
      const response = await httpRequest.post("http://localhost:8080/post-data", data);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
const getData = new GetData();
export default getData;
