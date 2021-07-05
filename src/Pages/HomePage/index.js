import React from 'react';
import "./style.css";

import BlogList from "../BlogList";
import UseFetch from "../../components/UseFetch";

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

