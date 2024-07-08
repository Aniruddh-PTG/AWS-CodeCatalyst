import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './blogPost';

const App = () => {
  const [posts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
  ]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogList posts={posts} />} />
          <Route path="/posts/:id" element={<BlogPost posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
