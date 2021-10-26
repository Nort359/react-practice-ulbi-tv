import React, {useState} from 'react';

import Input from '../ui/Input';
import Button from '../ui/Button';

const PostForm = (props) => {
    const initData = {
        title: '',
        text: '',
    };

    const [post, setPost] = useState(initData);

    function onAdd(event) {
        event.preventDefault();

        setPost(initData);

        props.onAdd({
            id: Date.now(),
            ...post,
        });
    }

    return (
        <form>
            <Input
                type="text"
                value={post.title}
                placeholder={'Post`s title'}
                onChange={event => setPost({
                    ...post,
                    title: event.target.value,
                })}
            />
            <Input
                type="text"
                value={post.text}
                placeholder={'Post`s description'}
                onChange={event => setPost({
                    ...post,
                    text: event.target.value,
                })}
            />
            <Button onClick={onAdd}>Create post</Button>
        </form>
    );
};

export default PostForm;