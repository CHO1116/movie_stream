import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { ActivityIndicator, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;
const Text = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export default ({ loading, nowPlaying }) => (
  <Container>
    {nowPlaying.length == 0 ? (
      <ActivityIndicator color='white' size='small' />
    ) : (
      <Header>
        <Swiper controlsEnabled={false} loop timeout={1}>
          {nowPlaying.map((movie) => (
            <Section key={movie.id}>
              <Text>{movie.original_title}</Text>
            </Section>
          ))}
        </Swiper>
      </Header>
    )}
  </Container>
);
