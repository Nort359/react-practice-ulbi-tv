import React from 'react';

const Select = (props) => {
    const {
        options,
        defaultLabel = 'Select',
        value = '',
        onChange
    } = props;

    return (
        <div>
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled={true} value="">
                    {defaultLabel}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;