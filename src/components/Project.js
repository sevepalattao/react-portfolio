import React, { useState } from 'react';
import JATE from '../assets/jate.png';
import techBlog from '../assets/tech-blog.png';
import foodTracker from '../assets/food-tracker.png';
import marvelite from '../assets/marvelite.png';
import weather from '../assets/weather.png';
import codeQuiz from '../assets/code-quiz.png';

export default function Project () {
    const [projects] = useState([
        {
            name: "PWA Text Editor",
            image: JATE,
            repo: 'https://github.com/sevepalattao/PWATextEditor',
            deployed: 'https://pwa-texteditor-sevep.herokuapp.com/',
        },
        {
            name: "The Tech Blog",
            image: techBlog,
            repo: 'https://github.com/sevepalattao/techBlogMVC',
            deployed: 'https://tech-blog-mvc-sevep.herokuapp.com/',
        },
        {
            name: "Food Tracker",
            image: foodTracker,
            repo: 'https://github.com/kipschetnan/Food-Tracker',
            deployed: 'https://serene-taiga-18669.herokuapp.com/',
        },
        {
            name: "Marvelite Hub",
            image: marvelite,
            repo: 'https://github.com/kipschetnan/Marvelite-Hub',
            deployed: 'https://kipschetnan.github.io/Marvelite-Hub/',
        },
        {
            name: "Weather App",
            image: weather,
            repo: 'https://github.com/sevepalattao/weatherApp',
            deployed: 'https://sevepalattao.github.io/weatherApp/',
        },
        {
            name: "Code Quiz",
            image: codeQuiz,
            repo: 'https://github.com/sevepalattao/web-APIs-codequiz',
            deployed: 'https://sevepalattao.github.io/web-APIs-codequiz/',
        }
    ]);

    return (
        <section className='sections'>
            <h2>Portfolio</h2>
            <div className='section-content'>
                {projects.map((project, i) => (
                  <div className='wrapper'>
                    <div className='Project'>
                        {project.name} - 
                        <a href={project.repo}> Check out this project's repository here</a>
                    </div>
                    <div className ='container' key={i}>
                        <a href={project.deployed}>
                            <img src={project.image}/>
                        </a>
                    </div>
                  </div>
                ))}
            </div>
        </section>
    );
};