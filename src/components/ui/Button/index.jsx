import React from 'react';

import classes from './styles.module.css';

const Button = ({children, ...props}) => {
    return (
        <button className={classes.btn} {...props}>
            {children}
        </button>
    );
};

export default Button;