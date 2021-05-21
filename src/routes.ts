import { lazy } from 'react';

export default [
  {
    path: '/signup',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./components/SignUp/SignUp')),
    privat: false,
    restricted: true,
  },
  {
    path: '/',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./components/SignIn/SignIn')),
    privat: false,
    restricted: true,
  },
  {
    path: '/list',
    label: 'Add word',
    exact: true,
    component: lazy(() => import('./views/VocabularyView/VocabularyView')),
    privat: true,
    restricted: false,
  },
  {
    path: '/learn',
    label: 'Learning',
    exact: true,
    component: lazy(() => import('./views/VocabularyLearn/VocabularyLearn')),
    privat: true,
    restricted: false,
  },
  {
    path: '/check',
    label: 'Playing',
    exact: true,
    component: lazy(() => import('./views/Playing/Playing')),
    privat: true,
    restricted: false,
  },
];
