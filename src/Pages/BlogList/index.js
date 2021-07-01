import React from 'react';
import "./style.css";

const BlogList = (props) => {

    const blogs = props.blogs

    return ( 
        <div className="BlogList">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: {blog.author}</p>
                    <p>Blog text: {blog.body}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;