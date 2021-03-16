import { StyleSheet, Image, useWindowDimensions } from 'react-native';

export default () => {
    const { width } = useWindowDimensions();
    const logo = Image.resolveAssetSource(require('src/assets/logo.png'));
    const logoW = width * 85 / 100;
    const logoH = (logoW * logo.height) / logo.width;

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0002'
        },
        logo: {
            width: logoW,
            height: logoH
        }
    });
}