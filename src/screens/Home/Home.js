import React, { memo } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, Button } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { useHome } from 'src/hooks';
import style from './style';

const Home = () => {
    const { container, toolbar, toolbarTitle, indicator, card, contentContainerStyle, cardThumb, cardTitle, cardInfo, filterBtn, bottomSheetHolder, userCard, hint, userName, selectedUsername } = style();
    const { albums, users, photos, loading, visible, filterAlbums, filterUser, setFilterUser, setVisible } = useHome();

    const renderItem = ({ item }) => {
        const album = photos.filter(e => e.albumId === item.id);
        const owner = users.filter(e => e.id === item.userId);
        return (
            <TouchableOpacity style={card}>
                <Image source={{ uri: album[0].thumbnailUrl }} style={cardThumb} />
                <View style={{ flex: 1 }}>
                    <Text style={cardTitle} numberOfLines={3}>{item.title}</Text>
                    <Text style={cardInfo}>{`Album owner: ${owner[0].name}`}</Text>
                    <Text style={cardInfo}>{`Email: ${owner[0].email}`}</Text>
                    <Text style={cardInfo}>{`Website: ${owner[0].website}`}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const renderUsers = ({ item }) => {
        return (
            <TouchableOpacity style={userCard} onPress={() => { setFilterUser(item); setVisible(false); }}>
                <Text style={[userName, item.name == filterUser.name && selectedUsername]}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={container}>
            <View style={toolbar}>
                <Text style={toolbarTitle}>{"Gallery App"}</Text>
                <Text style={filterBtn} onPress={() => setVisible(true)}>{"Filter"}</Text>
            </View>

            {filterUser != "" && <Text style={hint}>{`You now filter with: ${filterUser.name}`}</Text>}

            {loading ? <ActivityIndicator color="black" style={indicator} />
                :
                <FlatList
                    data={filterUser != '' ? filterAlbums : albums}
                    renderItem={renderItem}
                    keyExtractor={(e, i) => i.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={contentContainerStyle}
                />}

            <BottomSheet
                visible={visible}
                onBackButtonPress={() => setVisible(false)}
                onBackdropPress={() => setVisible(false)}
            >
                <View style={bottomSheetHolder}>
                    <FlatList
                        data={users}
                        renderItem={renderUsers}
                        keyExtractor={(e, i) => i.toString()}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: '#0004' }} />}
                    />
                    <Button title="Reset" color="red" onPress={() => { setFilterUser(""); setVisible(false); }} />
                </View>
            </BottomSheet>
        </View>
    );
}

export default memo(Home);