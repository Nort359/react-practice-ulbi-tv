import React from 'react';

import Button from '../ui/Button';

import classes from './styles.module.css';

const PostItem = ({id, title, text, ...props}) => {
    function onDelete(id) {
        return function(event) {
            event.preventDefault();

            props.onDelete(id);
        }
    }

    return (
        <div className={classes.post}>
            <div className="post__content">
                <strong>{title}</strong>
                <div>{text}</div>
            </div>
            <div className="post__btns">
                <Button onClick={onDelete(id)}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;