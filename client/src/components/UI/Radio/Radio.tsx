import React from 'react';
import classes from './Radio.module.scss'

interface RadioProps {
    label: string,
    id: string,
    name: string,
    value: string,
    setValue: (arg0: any) => void,
    props?: any
}

const Radio: React.FC<RadioProps> = ({id, name, value, label, setValue, props}) => {
    return (
        <div className={classes.inputbox}>
            <input name={name} value={value} onChange={(e) => setValue(e.target.value)} type="radio" id={id} {...props}/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Radio;