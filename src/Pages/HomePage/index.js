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

//Start the json server
//npx json-server --watch data/db.json --port 8000

//Install React Router DOM
//npm install react-router-dom@5