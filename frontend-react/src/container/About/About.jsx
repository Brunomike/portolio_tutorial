import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapper } from '../../hoc';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import './About.scss';

const aboutsExample = [
  {
    title: 'Web Development',
    description: 'I am a good web developer',
    imgUrl: images.about01
  },
  {
    title: 'Web Design',
    description: 'I am a good web designer',
    imgUrl: images.about02
  },
  {
    title: 'UI/UX',
    description: 'I am a good web UI/UX designer',
    imgUrl: images.about03
  },
  {
    title: 'Web Animations',
    description: 'I am a good web animations developer',
    imgUrl: images.about04
  },
];

//front/back-end
const About = () => {
  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then(data => setabouts(data));

  }, []);

  return (
    <div className='app__about'>
      <h2 className='head-text'>
        I Know That
        <span> Good Dev</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrapper(About,'about');