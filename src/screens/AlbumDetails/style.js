import { Platform, StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default () => {
    const { width } = useWindowDimensions();
    const { bottom, top } = useSafeAreaInsets();
    const isAndroid = Platform.OS === 'android';

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#0002'
        },
        toolbar: {
            width: '100%',
            height: isAndroid ? top + 56 : top + 49,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: isAndroid ? 'center' : 'flex-end',
            paddingBottom: isAndroid ? null : '4%'
        },
        toolbarTitle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: '#000',
            maxWidth: '75%'
        },
        contentContainerStyle: {
            width,
            paddingBottom: bottom + 10
        },
        card: {
            width: (width / 4) - 4,
            height: 130,
            flexDirection: 'row',
            backgroundColor: '#2222',
            margin: 2,
            borderRadius: 4,
            overflow: 'hidden'
        },
        activeCard: {
            borderWidth: 2,
            borderRadius: 4,
            borderColor: 'blue'
        },
        backBtn: {
            position: 'absolute',
            left: 0,
            bottom: '10%',
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center'
        },
        backImg: {
            width: 24,
            height: 24
        },
        viewer: {
            width,
            justifyContent: 'center',
            alignItems: 'center',
            height: '35%'
        },
        currentImg: {
            width: width * 55 / 100,
            height: '75%'
        },
        albumImg: {
            flex: 1
        },
        prevBtn: {
            position: 'absolute',
            left: '6%'
        },
        nextBtn: {
            position: 'absolute',
            right: '6%'
        },
        label: {
            fontWeight: 'bold'
        }
    });
}