import React, {useState} from 'react';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

import Select from './components/ui/Select';

import './styles.css';

function App() {
  const [posts, setPosts] = useState([
      {
          id: 2,
          title: 'Node.js',
          text: 'Node.js is backend language',
      },
      {
          id: 1,
          title: 'JavaScript',
          text: 'JavaScript - programming language',
      },
      {
          id: 3,
          title: 'React',
          text: 'React is ui library',
      },
  ]);
  const [sort, setSort] = useState('');

  function onAddPost(post) {
      setPosts([...posts, post]);
  }

  function onDeletePost(id) {
      setPosts(posts.filter((post) => post.id !== id));
  }

  function sortPosts(selectedSort) {
      console.log('selectedSort', [...posts].sort((a, b) => {
          return a[selectedSort].localeCompare(b[selectedSort])
      }));
      setSort(selectedSort);

      setPosts([...posts].sort((a, b) => {
          return a[selectedSort].localeCompare(b[selectedSort])
      }));
  }

  return (
    <div>
      <PostForm onAdd={onAddPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <Select
                value={sort}
                onChange={sortPosts}
                defaultLabel={'Sort by...'}
                options={[
                    {value: 'title', label: 'By name'},
                    {value: 'text', label: 'By text'},
                ]}
            />
        </div>
      {posts.length > 0
      ? (<PostList
              title={'Posts list'}
              items={posts}
              onDelete={onDeletePost}
          />)
      : (<h1 style={{textAlign: 'center'}}>
             There`re not posts yet
         </h1>)}
    </div>
  );
}

export default App;
