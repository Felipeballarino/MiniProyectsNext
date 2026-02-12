import React from 'react';

interface IPropsSwitch {
    title: string;
    value:boolean;
    changeValue: (value:boolean)=>void
}

const SwitchInput = ({ title, value,changeValue }: IPropsSwitch) => {
    return (
        <div  >
            <label htmlFor={title}>{title}</label>
            <input className='ml-2' type='checkbox' name={title} id={title} checked={value} onChange={(e)=>changeValue(e.target.checked)} />
        </div>
    );
};

export default SwitchInput;