import SERVER_BASE_URL from './config';

// API Pets static class
export default class ApiZook {

  // get a list of zooks
  static getList() {
    return fetch(`${SERVER_BASE_URL}/api/zook`, {
      method: 'get',
      headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json());
  }

  // get zook detail
  static get(id) {
    return fetch(`${SERVER_BASE_URL}/api/zook/${id}`, {
      method: 'get',
      headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json());
  }
}