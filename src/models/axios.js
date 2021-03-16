import axios from "axios";
import { baseURL, timeout } from '@env';

export const get = (url, options, token) => {
    let requestURL = `${baseURL}${url}`;

    axios.get(requestURL, { headers: token ? { Authorization: `Bearer ${token || ''}` } : {}, timeout: parseInt(timeout) })
        .then(response => {
            if (options.success) {
                options.success(response.data);
            }
        })
        .catch(error => {
            if (options.error) {
                options.error(error);
            }
        });
}

export const post = (url, params, options, token) => {
    let requestURL = `${baseURL}${url}`;
    let CancelToken = axios.CancelToken;

    axios.post(requestURL, params, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        onDownloadProgress: (progress) => {
            if (options.onDownloadProgress) {
                options.onDownloadProgress(progress);
            }
        },
        onUploadProgress: (progress) => {
            if (options.onUploadProgress) {
                options.onUploadProgress(progress);
            }
        },
        cancelToken: new CancelToken((cancel) => {
            if (options.cancel) {
                options.cancel(cancel);
            }
        }),
        timeout: parseInt(timeout)
    })
        .then(response => {
            if (options.success) {
                options.success(response.data);
            }
        })
        .catch(error => {
            if (options.error) {
                options.error(error);
            }
        });
}