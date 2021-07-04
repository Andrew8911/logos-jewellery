import React from 'react';
import "./style.scss";

import BlogList from "../BlogList";
import UseFetch from "/home/andy/Documents/logos-jewellery/src/components/UseFetch";

const HomePage = () => {

    const {data: blogs, isPending, error} = UseFetch('http://localhost:8000/blogs')

    return ( 
        <div className="HomePage">
            {error && <div> {error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
     );
}
 
export default HomePage;

