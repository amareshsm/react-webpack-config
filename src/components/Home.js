import React from 'react';
import { Link } from 'react-router-dom';
import {  h1 } from './Style.css';
import Layout from './Layout';
import {Spinner} from 'react-js-css-loaders'
import Multi from './multi';


const Home = () => {
  return (
    <Layout>
      <p className={h1}>Hello World of React and Webpack! hiiiii</p>
      <p>
        <Spinner/>
        <Multi/>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;