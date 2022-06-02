import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocailMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsTwitter />
            </div>
            <div>
                <FaFacebook />
            </div>
            <div>
                <BsInstagram />
            </div>
        </div>
    )
}

export default SocailMedia;
