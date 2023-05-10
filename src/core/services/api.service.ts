import axios, { Method } from 'axios';
import { SERVER_ADDRESS, API_URL } from '../../../config';
import { store } from '@src/core/store';
import { onSetVisibleSpinner } from '../store/reducer/app/actions';

interface RequestHeader {
  Accept: string;
  'Content-Type': string;
  Authorization?: string;
  'Accept-Language'?: string;
}

export default class ApiService {
  protected apiGet<T>(
    url: string,
    params: object = {},
    hasToken: boolean = false,
  ): Promise<T> {
    return this.apiRun<T>('get', url, null, params, hasToken);
  }

  protected apiPost<T>(
    url: string,
    body: any = null,
    params: object = {},
    hasToken: boolean = false,
  ): Promise<T> {
    return this.apiRun<T>('post', url, body, params, hasToken);
  }

  protected apiPut<T>(
    url: string,
    body: any = null,
    params: object = {},
    hasToken: boolean = false,
  ): Promise<T> {
    return this.apiRun<T>('put', url, body, params, hasToken);
  }

  protected apiDelete<T>(
    url: string,
    params: object = {},
    hasToken: boolean = false,
  ): Promise<T> {
    return this.apiRun<T>('delete', url, null, params, hasToken);
  }

  private apiRun<T>(
    method: Method,
    url: string,
    body: any = null,
    params: object = {},
    hasToken: boolean = false,
  ): Promise<T> {
    store.dispatch(onSetVisibleSpinner(true));

    return new Promise<T>((resolve, reject) => {
      axios({
        url,
        method,
        baseURL: `${SERVER_ADDRESS}${API_URL}`,
        params,
        data: body,
        headers: this.appendHeaders(hasToken),
        timeout: 60000,
      })
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error))
        .finally(() => store.dispatch(onSetVisibleSpinner(false)));
    });
  }

  private appendHeaders(hasToken: boolean = false): RequestHeader {
    const headers: RequestHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const {
      session: { token },
    } = store.getState().session;

    if (hasToken) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }
}
