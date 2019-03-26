/* global window */

export default class Resources {
  static baseUrl = '#BASE_URL#';

  static post({
    endPoint, body, success, fail
  }) {
    window.fetch(`${this.baseUrl}/${endPoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
       'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((payload) => {
      if (payload.status === 200) {
        success(payload.data);
      } else {
        fail(payload);
      }
    })
    .catch(fail);
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
