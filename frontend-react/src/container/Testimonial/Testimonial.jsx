import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrapper, MotionWrapper } from '../../hoc';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        console.log(`testimonials: ${console.table(data)}`);
        setTestimonials(data);
      });

      
      client.fetch(brandsQuery)
      .then((data) => {
          console.log(`brands: ${console.table(data)}`);
          setBrands(data);
      });

  }, []);


  return (
    <div>

    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);