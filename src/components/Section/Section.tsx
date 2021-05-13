import React, {FC, ReactElement, ReactNode} from 'react';

import Footer from "../Footer/Footer";
import Header from '../Header/Header';

import s from './Section.module.scss';

type PropTypes={
    children?: ReactNode;
}

const Section:FC<PropTypes> = ({children}:PropTypes):ReactElement => {
  return (
    <section className={s.container}>
      <Header/>
      {children}
      <Footer/>
    </section>
  );
};

export default Section;
