import React from 'react';

import Footer from "../Footer/Footer";

import Header from '../Header/Header.js';
import s from './Section.module.scss';

const Section = ({children}) => {
  return (
    <section className={s.container}>
      <Header/>
      {children}
      <Footer/>
    </section>
  );
};

export default Section;
