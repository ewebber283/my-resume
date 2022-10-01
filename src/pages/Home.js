import React from 'react';
import "../styles/Home.css";

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>About Me</h2>
                <div className='description'>
                    <p> Aspiring software developer with a passion for learning and creating</p>
                </div> 
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                <li className='item'>
                        <h2>Front-End</h2>
                        <span>HTML, CSS, JavaScript, ReactJS, jQuery, BootStrap, NPM</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>Node.js, Express.js, MySQL, MongoDB, GraphQL, ApolloServer </span>
                    </li>
                    <li className='item'>
                        <h2>Skills in Progress</h2>
                        <span>AWS, Java, C#, Python</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;