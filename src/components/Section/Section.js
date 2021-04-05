import React from 'react';
import { connect } from 'react-redux';
// import { CSSTransition } from 'react-transition-group';

import Header from '../Header/Header.js';
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';

import themeConfig from '../../configStyles/configStyle.js';

import s from './Section.module.scss';

const Section = ({ theme, children }) => {
  return (
    <section className={s.container} style={themeConfig[theme]}>
      <div className={s.bgimage}></div>

      <Header />
      {children}
      <div className={s.title}>
        <p>Vocabulary Building</p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: phoneBookSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps)(Section);
