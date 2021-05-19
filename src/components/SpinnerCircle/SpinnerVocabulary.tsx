import React, {FC} from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './SpinnerVocabulary.module.scss';

const SpinnerVocabulary: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.spinner}>
                <Loader type="Oval" color="#2f5794" height={150} width={150}/>
            </div>
        </div>
    );
}
export default SpinnerVocabulary;