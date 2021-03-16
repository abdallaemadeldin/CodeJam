import { useState, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

export const useAlbumDetails = () => {
    const { canGoBack, goBack } = useNavigation();
    const { params } = useRoute();
    const [photos] = useState(params.album);
    const [currentPhoto, setCurrentPhoto] = useState({ index: 0, item: photos[0] });

    const listRef = useRef();

    const multiOfFour = (num) => { return (num & 3) === 0 }
    const back = canGoBack && goBack;

    const onPrevPressed = () => {
        if (currentPhoto.index == 0) return;
        setCurrentPhoto(st => {
            const prevIndex = st.index - 1;
            if (listRef?.current && !multiOfFour(prevIndex))
                listRef.current.scrollToOffset({ animated: true, offset: 134 * Math.floor(prevIndex / 4) })
            return { index: prevIndex, item: photos[prevIndex] }
        });
    }

    const onNextPressed = () => {
        if (currentPhoto.index == photos.length - 1) return;
        setCurrentPhoto(st => {
            const nextIndex = st.index + 1;
            if (listRef?.current && multiOfFour(nextIndex))
                listRef.current.scrollToIndex({ animated: true, index: (nextIndex / 4) })
            return { index: nextIndex, item: photos[nextIndex] }
        });
    }

    return { params, photos, currentPhoto, listRef, setCurrentPhoto, onPrevPressed, onNextPressed, back };
}