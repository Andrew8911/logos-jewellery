import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

const BlogList = (props) => {

    const blogs = props.blogs

    return ( 
        <div className="BlogList">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by: {blog.author}</p>
                       
                    </Link>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;