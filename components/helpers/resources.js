/* global window */

export default class Resources {
  static baseUrl = '#BASE_URL#';

  static post({
    endPoint, body, success, fail
  }) {
    let statusCode;
    window.fetch(`${this.baseUrl}/${endPoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
       'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      const { status } = res;
      statusCode = status;
      return res.json();
    })
    .then((payload) => {
      if (statusCode === 200) {
        success(payload);
      } else {
        payload.status = statusCode;
        fail(payload);
      }
    })
    .catch((err) => { throw new Error(err); });
  }

  static auth({ body, success, fail }) {
    this.post({
      endPoint: 'api/auth',
      body,
      success,
      fail
    });
  }
}
