import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { movieApi } from '../../api';
import MoviesPresenter from './MoviesPresenter';

export default () => {
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingE: null,
    popular: [],
    popularE: null,
    upcoming: [],
    upcomingE: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingE] = await movieApi.nowPlaying();
    const [popular, popularE] = await movieApi.popular();
    const [upcoming, upcomingE] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      nowPlayingE,
      popular,
      popularE,
      upcoming,
      upcomingE,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return <MoviesPresenter />;
};
