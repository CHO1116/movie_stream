import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import Stack from './navigation/Stack';

//이미지 로드를 위한 function
//images는 이미지들의 array이어야 함.
const cacheImages = (images) =>
  images.map((image) => {
    //url을 보내거나
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      //module을 보낼 수 있음
      return Asset.fromModule(image).downloadAsync();
    }
  });

//동일한 방법으로 폰트도 가져올 수 있다
const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  //기능 : 미리 로딩을 시작하게 하는 function
  //설정 : 비동기 function
  //구현 : promise를 return
  const loadAssets = () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      require('./assets/pic.jpg'),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    console.log(images);
    console.log(fonts);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
