import 'swiper/swiper.scss';
import "../../styles/pagination.scss";
import "swiper/components/effect-flip/effect-flip.min.css";
import React, {FC, ReactElement} from 'react';
import SwiperCore, {EffectFlip, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {content} from '../../types/types'
import VocabularyItem from '../VocabularyItem/VocabularyItem';
import s from './VocabularyList.module.scss';

SwiperCore.use([Pagination, EffectFlip]);
const pagination = {
    "clickable": true,
    "renderBullet": function (index: number, className: string): string {
        return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
    }
}

type PropTypes = {
    newList: content[];
    removeWords: (_id: string) => void;
    children?: never;
}

const VocabularyList: FC<PropTypes> = ({removeWords, newList}: PropTypes) => {
    return (
        <>
            <Swiper effect={'flip'} grabCursor={true} pagination={pagination} spaceBetween={5} slidesPerView={1}>
                {newList.map((el:any, idx:number): ReactElement => (
                    <SwiperSlide key={idx}>
                        <div className={s.list}>
                            {el.map((elem: content) => (
                                <VocabularyItem elem={elem} removeWords={removeWords}/>
                            ))}
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </>
    );
};

export default VocabularyList;


VocabularyList.defaultProps = {
    newList: []
};
