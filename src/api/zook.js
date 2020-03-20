import API_URL from './config';

export default class ApiZook {

    // get a list of zooks
    static getList() {
        return fetch(`${API_URL}/api/zooks`, {
            method: 'get',
            headers: new Headers({'content-type': 'application/json'})
        }).then(response => response.json());
    }

    // get zook detail
    static get(id) {
        return fetch(`${API_URL}/api/zooks/${id}`, {
            method: 'get',
            headers: new Headers({'content-type': 'application/json'})
        }).then(response => response.json());
    }


    static upload(formData) {
        return fetch(`${API_URL}/api/zooks/upload`, {
            method: 'post',
            body: formData,
        }).then(response => response.json());

    }
}