import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import {AppWrapper, MotionWrapper} from '../../hoc';
import {urlFor, client} from '../../client';
import './Skills.scss';

const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query)
            .then((data) => {
                //console.log(`experiences: ${console.table(data)}`);
                setExperience(data);
            });

        client.fetch(skillsQuery)
            .then((data) => {
                //console.log(`skills: ${console.table(data)}`);
                setSkills(data);
            });

    }, []);

    return (
        <>
            <h2 className='head-text'>Skills & Experience</h2>
            <div className='app__skills-container'>
                <motion.div className='app__skills-list'>
                    {skills?.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className='app__skills-item app__flex'
                            key={skill._id}
                        >
                            <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                                <img src={urlFor(skill.icon)} alt={skill.name}/>
                            </div>
                            <p className='p-text'>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
            <motion.div className='app__skills-exp'>
                {experience?.map((experience) => (
                    <motion.div
                        className="app__skills-exp-item"
                        key={experience.year}
                    >
                        <div className="app__skills-exp-year">
                            <p className="bold-text">{experience.year}</p>
                        </div>

                        <motion.div className="app__skills-exp-works">
                            {experience.works.map((work) => (
                                <>
                                    <motion.div
                                        whileInView={{opacity: [0, 1]}}
                                        transition={{duration: 0.5}}
                                        className='app__skills-exp-work app__flex'
                                        data-tip
                                        data-for={work.name}
                                        key={work.name}>
                                        <h4 className='bold-text'>{work.name}</h4>
                                        <p className='p-text'>{work.comapany}</p>
                                    </motion.div>
                                    <ReactTooltip
                                        id={work.name}
                                        effect='solid'
                                        arrowColor="#fff"
                                        className="skills-tooltip"
                                    >
                                        {work.desc}
                                    </ReactTooltip>
                                </>
                            ))}
                        </motion.div>

                    </motion.div>

                ))}
            </motion.div>
        </>
    )
}

//export default AppWrapper(Skills, 'skills');

export default AppWrapper(
  MotionWrapper(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);