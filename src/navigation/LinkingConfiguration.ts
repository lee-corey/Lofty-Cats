/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from 'src/types/Navigation';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Landing: 'landing',
      SignUp: 'signup',
      Home: 'home',
      PostDetail: 'postdetail',
      AddPhoto: 'addphoto',
      NotFound: '*',
    },
  },
};

export default linking;
