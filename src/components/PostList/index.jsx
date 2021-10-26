import React from 'react';
import PostItem from '../PostItem';

const PostsList = (props) => {
    const {
        title = '',
        items = [],
        onDelete,
    } = props;

    return (
        <>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {items.map(item => (
                <PostItem
                    key={item.id}
                    onDelete={onDelete}
                    {...item}
                />
            ))}
        </>
    );
};

export default PostsList;