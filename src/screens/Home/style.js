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
            color: '#000'
        },
        indicator: {
            marginTop: '30%'
        },
        contentContainerStyle: {
            paddingBottom: bottom + 10
        },
        card: {
            width: width,
            height: 130,
            flexDirection: 'row',
            padding: '2%'
        },
        cardThumb: {
            width: '40%',
            height: '100%',
            marginEnd: '4%'
        },
        cardTitle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: '#fff'
        },
        cardInfo: {
            fontSize: 12,
            color: "#000",
            marginVertical: 2,
            fontWeight: '400'
        },
        filterBtn: {
            position: 'absolute',
            right: '4%',
            bottom: '20%'
        },
        bottomSheetHolder: {
            width: width,
            height: '35%',
            backgroundColor: '#fff',
            justifyContent: 'center',
            paddingHorizontal: '4%',
            paddingBottom: bottom + 10
        },
        userCard: {
            marginVertical: '1%',
            flexDirection: 'row',
            height: 44,
            alignItems: 'center'
        },
        hint: {
            fontSize: 18,
            textAlign: 'center',
            marginVertical: '2%',
            color: 'red'
        },
        userName: {
            fontSize: 14,
            color: '#000',
            fontWeight: 'bold'
        },
        selectedUsername: {
            color: "green"
        }
    });
}