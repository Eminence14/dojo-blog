import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'React track', body: 'lorem ipsum...', author: 'victor', id: 2 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 3 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'victor', id: 4 },
    ])
    const victorsBlog = blogs.filter(blog => blog.author === 'victor');
    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' />
            <BlogList blogs={victorsBlog} title="Victor's Blog" />
        </div>
    );
}

export default Home;