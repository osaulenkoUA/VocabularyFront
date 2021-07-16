import React, {FC, ReactElement,useEffect} from 'react';
import axios from "axios";
import s from './Checking.module.scss';

const Playing: FC = (): ReactElement => {


    useEffect(() => {

        foo()

    }, []);

    const foo=async ()=>{
        try {
            const data = await axios.get('https://polaris.brighterir.com/public/glenveagh_properties/price_feed/json_price?key=rgydmrge');
            console.log(data);
        }
        catch (err){
            console.dir(err)
        }
    }

    return (
        <div className={s.wrapper}>
            <h2>Comming soon</h2>

        </div>
    );
}

export default Playing;
