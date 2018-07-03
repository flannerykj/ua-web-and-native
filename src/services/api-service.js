// @flow

import axios from 'axios';
import config from '../config';

type AxiosError = {
  response: {
    data: {
      statusCode: number,
      message: string,
      error: {
        message: string
      }
    }
  },
  message: string
}

export class ApiService {
  endpoint: string = config.API_ENDPOINT;

  get token(): ?string {
    return '';
  }

  get headers(): any {
    return {
      'Content-Type': 'application/json'
    };
  }

  handleError(error: AxiosError): Promise<string> {
    if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
      return Promise.reject(error.response.data.error.message);
    } else if (error.message) {
      return Promise.reject(error.message);
    }
    return Promise.reject('An error occured');
  }

  get(url: string, options: any = {}): Promise<any> {
    const opts = Object.assign({}, {
      method: 'get',
      url: `${this.endpoint}${url}`,
      headers: this.headers
    }, options);
    return axios(opts).then((response) => response.data)
      .catch(this.handleError);
  }

  post(url: string, body: any): Promise<any> {
    return axios({
      url: `${this.endpoint}${url}`,
      method: 'post',
      data: JSON.stringify(body),
      headers: this.headers
    }).then((response) => response.data)
      .catch(this.handleError);
  }

  put(url: string, body: any): Promise<any> {
    return axios({
      url: `${this.endpoint}${url}`,
      method: 'put',
      data: JSON.stringify(body),
      headers: this.headers
    }).then((response) => response.data)
      .catch(this.handleError);
  }

  delete(url: string): Promise<any> {
    return axios({
      url: `${this.endpoint}${url}`,
      method: 'delete',
      headers: this.headers
    }).then((response) => response.data)
      .catch(this.handleError);
  }

  upload(url: string, file: File, fileField: string, data: any) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      formData.append(fileField, file, file.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          // accept any status in the 200 range
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open('POST', `${this.endpoint}${url}`, true);
      xhr.setRequestHeader('x-dothealth-token', this.token || '');
      xhr.send(formData);
    });
  }
}

export default new ApiService();
