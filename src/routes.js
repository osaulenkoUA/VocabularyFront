import { lazy } from 'react';

export default [
  {
    path: '/signup',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./components/SignUp/SignUp.js')),
    privat: false,
    restricted: true,
  },
  {
    path: '/',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./components/SignIn/SignIn.js')),
    privat: false,
    restricted: true,
  },
  {
    path: '/books',
    label: 'Books',
    exact: true,
    component: lazy(() => import('./views/PhoneBookView/PhoneBookView.js')),
    privat: true,
    restricted: false,
  },
  {
    path: '/learn',
    label: 'Books',
    exact: true,
    component: lazy(() => import('./views/VocabularyLearn/VocabularyLearn')),
    privat: true,
    restricted: false,
  },
];
