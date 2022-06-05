import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'

import {AppWrapper, MotionWrapper} from '../../hoc';
import {urlFor, client} from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setcurrentIndex] = useState(0);

    const handleClick = (index) => {
        setcurrentIndex(index);
    };

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

    const tst = testimonials[currentIndex];


    return (
        <>
            {testimonials.length > 0 && (
                <>
                    <div className='app__testimonial-item app__flex'>
                        <img src={urlFor(tst.imgurl)} alt="testimonial"/>
                        <div className='app__testimonial-content'>
                            <p className='p-text'>{tst.feedback}</p>
                            <div>
                                <h4 className='bold-text'>{tst.name}</h4>
                                <h5 className='p-text'>{tst.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className='app__testimonial-btns app__flex'>
                        <div className='app__flex'
                             onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft/>
                        </div>
                        <div className='app__flex'
                             onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight/>
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonial-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration:0.5,type:'tween'}}
                    key={brand._id}
                    >
                        <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                    </motion.div>
                    ))}
            </div>
        </>
    )
}

export default AppWrapper(
    MotionWrapper(Testimonial, 'app__testimonial'),
    'testimonial',
    'app__primarybg'
);