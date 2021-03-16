import React, { memo } from 'react';
import { View, Image } from 'react-native';
import { useSplash } from 'src/hooks';
import style from './style';

const Splash = () => {
    const { container, logo } = style();
    useSplash();

    return (
        <View style={container}>
            <Image source={require('src/assets/logo.png')} style={logo} />
        </View>
    );
}

export default memo(Splash);