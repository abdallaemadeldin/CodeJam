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
