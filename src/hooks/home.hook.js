import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { fetchAlbums, fetchUsers, fetchPhotos } from 'src/models/home.model';

export const useHome = () => {
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(true);
    const [albums, setAlbums] = useState([]);
    const [users, setUsers] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [visible, setVisible] = useState(false);
    const [filterUser, setFilterUser] = useState('');
    const [filterAlbums, setFilterAlbums] = useState([]);

    useEffect(() => { fetch(); }, []);

    useEffect(() => {
        setFilterAlbums(albums.filter(e => e.userId === filterUser.id));
    }, [filterUser]);

    const fetch = async (name) => {
        setLoading(true);
        await Promise.all([
            new Promise((resolve, reject) => {
                fetchAlbums({
                    success: response => { setAlbums(response); resolve(response); },
                    error: reject
                })
            }),
            new Promise((resolve, reject) => {
                fetchUsers({
                    success: response => { setUsers(response); resolve(response); },
                    error: reject
                })
            }),
            new Promise((resolve, reject) => {
                fetchPhotos({
                    success: response => { setPhotos(response); resolve(response); },
                    error: reject
                })
            })
        ]).then(() => { setLoading(false); })
            .catch(error => {
                alert(`Something went wrong ${error}`);
                setLoading(false);
            });
    }

    return { albums, users, photos, loading, visible, filterUser, filterAlbums, setFilterUser, setVisible };
}