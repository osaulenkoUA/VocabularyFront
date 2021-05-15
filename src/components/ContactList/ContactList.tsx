import 'swiper/swiper.scss';
import "../../styles/pagination.scss";
import "swiper/components/effect-flip/effect-flip.min.css";
import React,{FC} from 'react';
// import {CSSTransition, TransitionGroup} from 'react-transition-group';
import SwiperCore, {EffectFlip, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.scss';

SwiperCore.use([Pagination, EffectFlip]);
const pagination = {
  "clickable": true,
  "renderBullet": function (index:number, className:string):string {
    return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
  }
}
interface data {
    word?: string;
    translate?: string;
    _id:string;
}
type PropTypes= {
    newList: [[data]];
    removeWords: (_id: string) => void;
    children?: never;
}

const ContactList:FC<PropTypes> = ({ removeWords, newList}:PropTypes) => {
  return (
    <>
      <Swiper effect={'flip'} grabCursor={true} pagination={pagination} spaceBetween={5} slidesPerView={1}>
        {newList.map((el,idx) => (
          <SwiperSlide key={idx}>
            {/*<TransitionGroup component="div" className={s.list}>*/}
            <div className={s.list}>
              {el.map(elem => (
                // <CSSTransition key={elem._id} timeout={250} classNames={s} unmountOnExit>
                  <ContactItem elem={elem} removeWords={removeWords}/>
                // </CSSTransition>
              ))}
            </div>
            {/*</TransitionGroup>*/}
          </SwiperSlide>
        ))
        }
      </Swiper>
    </>
  );
};

export default ContactList;


ContactList.defaultProps = {
  newList: [[{_id:''}]]
};
