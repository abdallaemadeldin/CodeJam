import React, { memo } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useAlbumDetails } from 'src/hooks';
import style from './style';

const AlbumDetails = () => {
    const { container, toolbar, toolbarTitle, card, contentContainerStyle, backBtn, backImg, activeCard, viewer, currentImg, albumImg, prevBtn, nextBtn, label } = style();
    const { params, photos, currentPhoto, listRef, setCurrentPhoto, onPrevPressed, onNextPressed, back } = useAlbumDetails();

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[card, currentPhoto.index === index && activeCard]} onPress={() => setCurrentPhoto({ index, item })}>
                <Image source={{ uri: item.url }} style={albumImg} />
            </TouchableOpacity>
        );
    }

    return (
        <View style={container}>
            <View style={toolbar}>
                <TouchableOpacity style={backBtn} onPress={back}>
                    <Image source={require('src/assets/back.png')} style={backImg} />
                </TouchableOpacity>
                <Text style={toolbarTitle} numberOfLines={1}>{params.item.title}</Text>
            </View>

            <View style={viewer}>
                <TouchableOpacity style={prevBtn} onPress={onPrevPressed} disabled={currentPhoto.index == 0}>
                    <Text style={label}>{"Prev"}</Text>
                </TouchableOpacity>
                <Image source={{ uri: currentPhoto.item.url }} style={currentImg} />
                <TouchableOpacity style={nextBtn} onPress={onNextPressed} disabled={currentPhoto.index == photos.length - 1}>
                    <Text style={label}>{"Next"}</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                ref={listRef}
                data={photos}
                numColumns={4}
                renderItem={renderItem}
                keyExtractor={(e, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={contentContainerStyle}
            />
        </View>
    );
}

export default memo(AlbumDetails);