import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-native-web-swiper';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Header = styled.view`
  width: 100%,
  height: ${height / 3}px,
`;

const Section = styled.view`
  background-color: red,
  height: 100%,
`;
const Text = styled.text``;

export default () => (
  <Header>
    <Swiper>
      <Section>
        <Text>Slide 1</Text>
      </Section>
      <Section>
        <Text>Slide 2</Text>
      </Section>
      <Section>
        <Text>Slide 3</Text>
      </Section>
    </Swiper>
  </Header>
);
