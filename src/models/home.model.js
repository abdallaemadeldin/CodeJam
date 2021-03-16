import { get } from './axios';

export const fetchAlbums = (options) => {
    get(`albums`, options)
}

export const fetchUsers = (options) => {
    get(`users`, options)
}

export const fetchPhotos = (options) => {
    get(`photos`, options)
}